#!/bin/bash
trap "kill 0" EXIT

# Function to change directory in less-watch-compiler.config.json
change_less_watch_json() {
parse_json_script=$(mktemp parse_json.XXXX.py)
cat > $parse_json_script << SCRIPT
#!/usr/bin/env python
import json
filename = "less-watch-compiler.config.json"
with open(filename, 'r+') as f:
  jsonObject = json.load(f)
  jsonObject['outputFolder'] = "${BUILD_DIR}/styles"
  f.seek(0)
  json.dump(jsonObject, f, indent=4, separators=(','," : "))
SCRIPT
python $parse_json_script && rm $parse_json_script
}

# Set this variable to the name of the output directory
BUILD_DIR=builds

mkdir -p ${BUILD_DIR}
mkdir -p ${BUILD_DIR}/styles
mkdir -p ${BUILD_DIR}/scripts
mkdir -p ${BUILD_DIR}/resources

cp src/scripts/* ${BUILD_DIR}/scripts/ --update
cp -r src/resources/* ${BUILD_DIR}/resources/ --update
cp src/root/* ${BUILD_DIR}/ --update

change_less_watch_json

pug -w src/pug/pages/ --basedir ./ --out ${BUILD_DIR}/ &
less-watch-compiler &
live-server --port=9600 ./${BUILD_DIR} &

wait