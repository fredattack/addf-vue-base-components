#!/bin/sh

yarn version
rollup -c

git add . && \
git add -u && \
read -r -p 'Commit description: ' desc
git commit -m "$desc" && \
git push
