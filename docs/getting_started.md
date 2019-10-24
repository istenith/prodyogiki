TECHONOGIES
---
## pug
Python based indentation way to easily consvert to htmal with same tags

## less
Object oriented way of writing CSS, gets converted to CSS
SETUP
---
Install all node packages
```
$ ./npm_global_installs.sh
```

This would install global packages namely `pug, less, live-server`

BUILD
---
On `master` branch of the project run
```
$ ./build.sh
```
This will create a directory `builds` in project folder.

**Note:** This is listener script and once your run it go ahead making changes.

To kill press `ctrl + C`


Test for features and bugs then push the changes.

CONTRIBUTION
---
Due to bug inducing workflow experienced in the past. The workflow adopted seems to be conservative but is necessary.
There are two branches of the project `master` and `gh-pages`. `master` is the main development branch where all the latest code exists. `gh-pages` branch is marked to be hosted by github and only thoroughly tested builds should be commited here.

All developers should volunteer to test the builds before updates to `gh-pages` branch.

Try to write most expressive code and avoid repetition.
