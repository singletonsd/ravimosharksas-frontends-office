#!/usr/bin/env bash

# Web Page of BASH best practices https://kvz.io/blog/2013/11/21/bash-best-practices/
#Exit when a command fails.
set -o errexit
#Exit when script tries to use undeclared variables.
set -o nounset
#The exit status of the last command that threw a non-zero exit code is returned.
set -o pipefail

#Trace what gets executed. Useful for debugging.
#set -o xtrace

# Set magic variables for current file & dir
__dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
__file="${__dir}/$(basename "${BASH_SOURCE[0]}")"
__base="$(basename ${__file} .sh)"
__root="$(cd "$(dirname "${__dir}")" && pwd)"

function usage(){
  echo -e "Amazon S3 bucket name."
}

AMAZON_S3_BUCKET=
BRANCH=

if [ $# -ge 1 ]; then
  AMAZON_S3_BUCKET=${1}
  if [ $# -ge 2 ]; then
    BRANCH=${2}
  fi
else
  BRANCH=master
  AMAZON_S3_BUCKET="ravimo.singletonsd.com"
fi

AMAZON_S3_FOLDER="/frontends/office/"

WEB_FOLDER="dist/"

if [ ${BRANCH} == "master" ]; then
  DATE="$(date '+%Y-%m-%d--%H:%M:%S')"
  aws s3 mv "s3://${AMAZON_S3_BUCKET}${AMAZON_S3_FOLDER}production" "s3://${AMAZON_S3_BUCKET}${AMAZON_S3_FOLDER}${DATE}" --recursive
  # aws s3 rm s3://${AMAZON_S3_BUCKET}${AMAZON_S3_FOLDER}testing --recursive
  # aws s3 rm s3://${AMAZON_S3_BUCKET}${AMAZON_S3_FOLDER}qa --recursive
else
  if [ "${BRANCH}" == "develop" ]; then
    aws s3 rm s3://${AMAZON_S3_BUCKET}${AMAZON_S3_FOLDER}staging --recursive
    # aws s3 rm s3://${AMAZON_S3_BUCKET}${AMAZON_S3_FOLDER}develop --recursive
    # aws s3 rm s3://${AMAZON_S3_BUCKET}${AMAZON_S3_FOLDER}testing-dev --recursive
    # aws s3 rm s3://${AMAZON_S3_BUCKET}${AMAZON_S3_FOLDER}qa-dev --recursive
  fi
fi

rm -rf ${WEB_FOLDER}dist-root

aws s3 cp --acl public-read ${WEB_FOLDER} s3://${AMAZON_S3_BUCKET}${AMAZON_S3_FOLDER} --recursive
