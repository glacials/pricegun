#!/bin/sh
git subtree push --prefix dist https://glacials:${GITHUB_TOKEN}@github.com/glacials/pricegun.git gh-pages
