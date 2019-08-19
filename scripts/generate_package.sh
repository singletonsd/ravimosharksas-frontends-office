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

if ! type "ng" &> /dev/null; then
  echo "Angular is not installed. Install it and then re launch"
  exit 1
fi

function usage(){
  echo -e "Branch or tag name"
}

BRANCH=
TOTAL_STAGES=
TARGETS=
PATHS=

PATH_BASE=frontends/office/

if [ $# -ne 1 ]; then
  echo -e "Illegal number of parameters"
  echo -e "$(usage)"
  exit 1
else
  BRANCH=${1}
fi

if [ "${BRANCH}" == "master" ]; then
  TOTAL_STAGES=2
  echo "Generating ${TOTAL_STAGES} binaries for branch ${BRANCH}"
  TARGETS=(production testing qa)
  PATHS=("${PATH_BASE}production" "${PATH_BASE}testing" "${PATH_BASE}qa")
else
  if [ "${BRANCH}" == "develop" ]; then
    TOTAL_STAGES=3
    echo "Generating ${TOTAL_STAGES} binaries for branch ${BRANCH}"
    TARGETS=('staging' 'develop' 'testing-dev' 'qa-dev')
    PATHS=("${PATH_BASE}staging" "${PATH_BASE}development" "${PATH_BASE}testing-dev" "${PATH_BASE}qa-dev")
  else
    TOTAL_STAGES=0
    echo "Generating ${TOTAL_STAGES} binaries for TAG ${BRANCH}"
    TARGET=${BRANCH}
  fi
fi

if [ -d "dist" ]; then
  rm -r dist
fi
mkdir -p dist
cd dist

# Create one for root folder
npm run ng build --prod --build-optimizer #> /dev/null 2>&1
mv dist dist-root

# Create for each stage
for i in $( eval echo {0..$TOTAL_STAGES} )
do
  echo "Task ${i}/${TOTAL_STAGES} - ${TARGETS[$i]}: Generating binaries for path: ${PATHS[$i]}"
  npm run ng build --prod --build-optimizer --base-href="/${PATHS[${i}]}/" #> /dev/null 2>&1
  mv dist ${TARGETS[${i}]}
done
