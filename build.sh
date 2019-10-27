#! bash
trap "kill 0" EXIT

BUILDS_DIR = builds

mkdir -p builds
mkdir -p builds/styles
mkdir -p builds/scripts
mkdir -p builds/resources

cp src/scripts/* builds/scripts/ --update
cp -r src/resources/* builds/resources/ --update
cp src/root/* builds/ --update

pug -w src/pug/pages/ --basedir ./ --out builds/ &
less-watch-compiler &
live-server --port=9600 ./builds &

wait
