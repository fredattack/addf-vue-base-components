#!/bin/sh

yarn version
rollup -c

git add . && \
git add -u && \
read -r -p 'Commit message: ' desc
git commit -m "$desc" && \
git push

echo "pushed, new released will be created and automatically published !!! "
