# codeforlife-package-javascript

This repo hosts Code for Life's Node.js package. This package contains all reusable frontend code, meant to be installed across CFL's various frontend services.

## Installation

To install this package, do one of the following options.

*Remember to replace the version number ("0.0.0") with your [desired version](https://github.com/ocadotechnology/codeforlife-package-javascript/releases).*

Note that the version property in `package.json` is not set as it's only needed when publishing to NPM.

**Option 1:** Run `yarn install` command:

```bash
yarn install git+https://github.com/ocadotechnology/codeforlife-package-javascript.git#v0.0.0
```

**Option 2:** add the following to `package.json`:

```json
{
  "dependencies": {
    "codeforlife": "github:ocadotechnology/codeforlife-package-javascript#v0.0.0"
  }
}
```

**Why does Yarn install an old version of the CFL package?**

This sometimes occurs because Yarn has cached an old version of the CFL package. To resolve this, clear your cache and then install the new version.

```bash
yarn cache clean
```

## Pipeline

The pipeline for this repo will automatically run the following steps when a push is made to the `main` branch.

1. Setup a node env and install dependencies.
1. Assert that there are no lint or test errors.
1. Build the package, outputted to the `lib` directory.
1. Push changes to `lib`, `CHANGELOG.md` and create a new GitHub Release.
