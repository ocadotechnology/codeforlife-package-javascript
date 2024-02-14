# codeforlife-package-javascript

This repo hosts Code for Life's Node.js package. This package contains all
reusable frontend code, meant to be installed across CFL's various frontend
services.

## LICENCE
In accordance with the [Terms of Use](https://www.codeforlife.education/terms#terms)
of the Code for Life website, all copyright, trademarks, and other
intellectual property rights in and relating to Code for Life (including all
content of the Code for Life website, the Rapid Router application, the
Kurono application, related software (including any drawn and/or animated
avatars, whether or not such avatars have any modifications) and any other
games, applications or any other content that we make available from time to
time) are owned by Ocado Innovation Limited.

The source code of the Code for Life portal, the Rapid Router application
and the Kurono/aimmo application are [licensed under the GNU Affero General
Public License](https://github.com/ocadotechnology/codeforlife-workspace/blob/main/LICENSE.md).
All other assets including images, logos, sounds etc., are not covered by
this licence and no-one may copy, modify, distribute, show in public or
create any derivative work from these assets.

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
1. Merge your branch into the `main` branch.
1. [Manually trigger](https://github.com/ocadotechnology/codeforlife-package-javascript/actions/workflows/main.yml)
the `Main` pipeline for the `main` branch.

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
