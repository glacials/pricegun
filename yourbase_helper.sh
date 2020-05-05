#!/bin/sh
git subtree push --prefix build https://glacials:${GITHUB_TOKEN}@github.com/glacials/pricegun.git gh-pages
