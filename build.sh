#!/bin/bash
rm -rf release && rm -f release.tar.gz
mkdir release && cp -r build dist index.html release
tar -zcvf release.tar.gz release/
ftp -n <<- EOF
open 39.108.174.8
user ftpadmin 201213138060tbt,
binary
hash
passive
cd MD-Front-End
del release.tar.gz
lcd .
prompt
put release.tar.gz
close
bye
EOF