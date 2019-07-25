#!/usr/bin/env bash

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
  echo -e "1 - Branch or tag name"
  echo -e "2 - domain user"
  echo -e "3 - domain password"
  echo -e "4 - domain name"
}

DOMAIN_USER=
DOMAIN_PASS=
DOMAIN_NAME=
BRANCH=

DATE="$(date '+%Y-%m-%d--%H:%M:%S')"

FLAGS="set ftps:initial-prot ""; set ftp:ssl-allow false; set ftp:ssl-protect-data true; set ssl:verify-certificate no; "
INITIAL_SCRIPT="cd frontend/app; lcd dist; "
if [ $# -ne 4 ]; then
  echo -e "Illegal number of parameters"
  echo -e "$(usage)"
  exit 1
else
  BRANCH="${1}"
  DOMAIN_USER="${2}"
  DOMAIN_PASS="${3}"
  DOMAIN_NAME="${4}"
fi

if [ ! -d "dist" ]; then
  cd ..
fi

if [ "${BRANCH}" == "master" ]; then
  TOTAL_STAGES=2
  echo "Generating ${TOTAL_STAGES} binaries for branch ${BRANCH}"
  TARGETS=(production testing qa)
  PATHS=('latest' 'testing' 'qa')
else
  if [ "${BRANCH}" == "develop" ]; then
    TOTAL_STAGES=3
    echo "Generating ${TOTAL_STAGES} binaries for branch ${BRANCH}"
    TARGETS=('staging' 'develop' 'testing-dev' 'qa-dev')
    PATHS=('staging' 'development' 'testing-dev' 'qa-dev')
  else
    TOTAL_STAGES=0
    echo "Generating ${TOTAL_STAGES} binaries for TAG ${BRANCH}"
    TARGET=${BRANCH}
  fi
fi

ACTIONS=""
for i in $( eval echo {0..$TOTAL_STAGES} )
do
  echo "Task ${i}/${TOTAL_STAGES} - ${TARGETS[$i]}: Copy files for path: ${PATHS[$i]}"
  if [ "${PATHS[$i]}" == "latest" ]; then
    ACTIONS="${ACTIONS} mv latest old${DATE}; mkdir -p ${PATHS[$i]}; cd ${PATHS[$i]}; lcd dist-production; mirror --reverse; cd ../; lcd ../;"
  else
    ACTIONS="${ACTIONS} rm -r ${PATHS[$i]}; mkdir -p ${PATHS[$i]}; cd ${PATHS[$i]}; lcd dist-${PATHS[$i]}; mirror --reverse; cd ../; lcd ../;"
  fi
done

lftp -e "${FLAGS}${INITIAL_SCRIPT}${ACTIONS} quit;" -u ${DOMAIN_USER},${DOMAIN_PASS} ${DOMAIN_NAME}

exit 0
