echo ">>>>>> copy readme to omelop/readme"
source `dirname $0`/build.sh
git add .
lerna publish $*
