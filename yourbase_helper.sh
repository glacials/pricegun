#!/bin/sh

# To force
# git push https://glacials:${GITHUB_TOKEN}@github.com/glacials/pricegun.git `git subtree split --prefix build master`:gh-pages --force

# Not to force
git subtree push --prefix build origin gh-pages
