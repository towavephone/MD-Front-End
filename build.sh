#!/bin/bash
rm -rf release && mkdir release
cp -r build dist index.html release
cd ./release
ftp -p -n <<- EOF
open 39.108.174.8
user ftpadmin 201213138060tbt,
binary
hash
cd MD-Front-End
rm -rf dist build index.html
lcd .
prompt
mput *.*
close
bye
EOF