#!/bin/sh

git push https://glacials:${GITHUB_TOKEN}@github.com/glacials/pricegun.git `git subtree split --prefix build master`:gh-pages --force
