#!/bin/sh

# Subtree - To force
# git push https://glacials:${GITHUB_TOKEN}@github.com/glacials/pricegun.git `git subtree split --prefix build master`:gh-pages --force

# Subtree - Not to force
# git subtree push --prefix build https://glacials:${GITHUB_TOKEN}@github.com/glacials/pricegun gh-pages

mkdir -p build
cd build
git init
git remote add origin https://glacials:${GITHUB_TOKEN}@github.com/glacials/pricegun
git pull --force
cd ../
yarn install
yarn build
cd build
git add .
git -c 'user.name=YourBase' -c 'user.email=ben@yourbase.io' commit -am 'Automatic deploy by YourBase'
git push
cd ../
