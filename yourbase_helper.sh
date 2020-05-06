#!/bin/sh

# Old solution -- can't force push
#git subtree push --prefix build https://glacials:${GITHUB_TOKEN}@github.com/glacials/pricegun.git gh-pages

cd build
git init
git add .
git -c "user.name=YourBase" -c "user.email=ben@yourbase.io" commit -am "Automatic build by YourBase" --allow-empty
git push --force https://glacials:${GITHUB_TOKEN}@github.com/glacials/pricegun.git gh-pages
rm -rf .git
cd ..
