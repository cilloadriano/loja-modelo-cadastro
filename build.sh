#!/bin/sh

oldpath=`pwd`

cd backend
./build.sh

cd ../frontend
./build.sh

cd ..
docker-compose build
