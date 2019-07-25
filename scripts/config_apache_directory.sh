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

MAIN='frontend'
FOLDERS=('latest' 'qa' 'testing' 'staging' 'development' 'qa-dev' 'testing-dev')
TOTAL_FOLDERS=6
if [ ! -d ${MAIN} ]; then
  mkdir ${MAIN}
fi

for i in $( eval echo {0..$TOTAL_FOLDERS} )
do
  if [ ! -d "${MAIN}/${FOLDERS[$i]}" ]; then
    mkdir -p "${MAIN}/${FOLDERS[$i]}"
  fi
done

chmod -R 777 "${MAIN}"
