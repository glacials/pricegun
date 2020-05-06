#!/bin/sh

git push origin `git subtree split --prefix build master`:gh-pages --force

# Other solution
# cd build
# git init
# git add .
# git -c "user.name=YourBase" -c "user.email=ben@yourbase.io" commit -am "Automatic build by YourBase" --allow-empty
# git push --force https://glacials:${GITHUB_TOKEN}@github.com/glacials/pricegun.git gh-pages
# rm -rf .git
# cd ..
