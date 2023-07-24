# codeforlife-package-javascript

This repo hosts Code for Life's Node.js package. This package contains all
reusable frontend code, meant to be installed across CFL's various frontend
services.

## Installation

To install this package, do one of the following options.

*Remember to replace the version number ("0.0.0") with your
[desired version](https://github.com/ocadotechnology/codeforlife-package-javascript/releases).*

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

## Making Changes

To make changes, you must:

1. Branch off of main.
1. Push your changes on your branch.
1. Ensure the pipeline runs successfully on your branch.
1. Have your changes reviewed and approved by a peer.
1. Merge your branch into the main branch.

### Installing your branch

You may wish to install and integrate your changes into a CFL frontend before
it's been peer-reviewed.

*Remember to replace the branch name ("my-branch") with your
[branch](https://github.com/ocadotechnology/codeforlife-package-javascript/branches)*.

```json
{
  "dependencies": {
    "codeforlife": "github:ocadotechnology/codeforlife-package-javascript#my-branch"
  }
}
```

## Pipeline

When pushing to any branch, the pipeline will:

1. Check the code for linting errors.
1. Run tests on the React components.
1. Build the package.
1. Save the build to the `lib` directory.

When merging to the `main` branch, the pipeline will:

1. Update the package version in
[package.json](https://github.com/ocadotechnology/codeforlife-package-javascript/blob/main/package.json).
1. Update
[CHANGELOG.md](https://github.com/ocadotechnology/codeforlife-package-javascript/blob/main/CHANGELOG.md)
with latest commit messages.
1. Determine the next version number from the commit messages using
[semantic versioning](https://semver.org/).
1. Release a new version
[on GitHub](https://github.com/ocadotechnology/codeforlife-package-javascript/releases).
