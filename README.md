# Pricegun
Pricegun helps you estimate how much you should charge users for your SaaS side project.

## Development

### Dependencies
- [`yarn`][yarn]
- [`yb`][yb]

[yb]: https://github.com/yourbase/yb
[yarn]: https://github.com/yarnpkg/yarn

### Build and test
```
yb build
```

### Run
```
yb exec
```

### Deploy
Deploys to GitHub Pages happen automatically on push to `master` via [YourBase][yourbase], but with a [GitHub `repo`
token][token] in `GITHUB_TOKEN` you can initiate one manually with
```sh
yb build deploy
```

[yourbase]: https://yourbase.io
[token]: https://github.com/settings/tokens
