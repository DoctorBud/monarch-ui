## monarch-ui

This repository contains the Monarch Initiative web application.

## Development Prerequisites (move to CONTRIBUTING.md)

There is some one-time setup that needs to be completed before you can build and develop the application. Most of this is involved with ensuring that you have a compatible version of NodeJS installed.

### Install NodeJS v8.12.0

The existing application is buildable with v8.12.0, so these instructions will encourage the use of that version until further notice. It *might* be possible to build with earlier or later versions of NodeJS, but that has not been tested and these instructions are intended to be mostly foolproof.

#### Mac users without `homebrew`

If you don't have [homebrew](https://brew.sh) installed, you should install it.

#### Mac users with `homebrew`

If you have `homebrew` installed, but haven't run it in a while, you should update it with:

- `brew update`
- `brew upgrade`

##### Troubleshooting the Homebrew install

If the above update/upgrade instructions do not work, it may mean that you have upgraded MacOSX to High Sierra or beyond, and the older version of homebrew isn't able to auto-update itself. MacOSX High Sierra and beyond have modified the default security settings and file permissions so that older versions of `homebrew` may not work correctly and may not even update. If this appears to have happened to you, you will need to uninstall the old version and install the latest `homebrew`. See [FAQ](https://docs.brew.sh/FAQ) and search for 'How do I uninstall Homebrew?', which says that you should uninstall via the following:

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
```

### Install `nvm` - Node Version Manager

[nvm - Node Version Manager](https://github.com/creationix/nvm) is used to ensure that you are running the correct version of NodeJS. The instructions at [Installation](https://github.com/creationix/nvm#installation) should be sufficient for Mac/Unix. Mac users can alternatively use `homebrew` as described below).

#### Easy Install of `nvm` via `homebrew` on Mac

You can use `brew install nvm` to install `nvm`, saving yourself a lot of hassle if it works right. See [How to install NVM (Node Version Manager) with Homebrew](https://www.wdiaz.org/how-to-install-nvm-with-homebrew/).

After installing `nvm`, you will need to modify your `.bashrc` or `.bash_profile` as per the instructions linked above. The most important part of those instructions is likely the addition of the following to your `.bashrc` or `.bash_profile`:

```bash
export NVM_DIR="$HOME/.nvm"
. "$(brew --prefix nvm)/nvm.sh"
```

We recommend exiting your terminal session and starting a new one, to verify that `nvm` is properly installed with:

```bash
nvm run node --version
```

### Update to NodeJS v8.12.0 using `nvm`

Now we can use `nvm` to install and select a specific version of NodeJS. We are currently supporting NodeJS v8.12.0. The default NodeJS installation may be an earlier or later version, which is why we use `nvm`:

- `nvm install v8.12.0`
- `nvm use v8.12.0`

By default, you will need to type `nvm use v8.12.0` before any development session, which can become tedious and error-prone. It may be convenient to set v8.12.0 as your default with the command:

```bash
nvm alias default 8.12.0
```

---

## How to Build the App

### Before committing

- `npm run build` to update `/docs` directory
- Make sure you commit '/docs'

*TODO: Add some more details about the /docs directory and GHPages*

*TODO: Write a 'publish' script which isolates the committing of source changes from the publication to GHPages*.


### Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Run your unit tests

```
npm run test:unit
```

### Run your end-to-end tests

```
npm run test:e2e
```


