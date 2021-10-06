---
title: The easy life with dev tools
date: 2021-03-19
published: true
tags: ['Tools']
canonical_url: true
cover_image: ./images/zach-betten-KYTT8L5JLDs-unsplash.jpg
description: "How I set up projects with static testing tools"
---

Today, I want to show you how I set up projects with static testing tools. These tools make life easier by highlighting errors in your code, eliminating the need to spend time formatting your code and stopping you commiting errors in your git repositories.

I encourage you to check out the documentation for each of these tools. Just to be sure that you're following the latest recommended set up.

I've started a new project and just added an index.js file with a simple hello world script in a folder called `src`. I'm assuming you have yarn installed, are using VS Code. Once I'm in my project folder in VS Code, I create a New Integrated Terminal so that I can run commands specific to the project without having to switch between windows.

```

  console.log('Hello World');

```

And I'm going to run `yarn init -y` which creates a `package.json` file with default settings.

You can add scripts into this `package.json` file. `start` is typically the default name to give to a script to run an application. Let's add the script as follows:

```

{
  "name": "your-project",
  "version": "1.0.0",
  "license": "MIT",
  "scripts": {
    "start": "node src"
  }
}

```

If you run `yarn start` You should see Hello World appear.

## Git

You can initialize a Git repository using `git init`. I always add a `.gitignore` file with at least the following:

```

node_modules/
.DS_Store

/*.log


```

The .DS_Store is MacOS specific. We're going to be adding package dependencies to our project and they will be stored in node_modules. It's not something that you want to store in your repo as this would take up a lot of space!

## Babel

I write my code using ES6. The syntax is a massive improvement over ES5 but not all browsers can understand it. Luckily, [Babel](https://babeljs.io) transforms the code for us.

Run `yarn add --dev @babel/core @babel/cli @babel/preset-env @babel-node`.

In your command line, run `touch babel.config.json` and add:

```

  {
    "presets": ["@babel/env"]
  }

```

Add `"browserslist": "> 0.25%"` to your `package.json` file. The preset-env ensures that the syntax transforms and browser polyfills needed by the environments specified within your browserlist are used. You can [specify different browsers](https://github.com/browserslist/browserslist#configuring-for-different-environments) if you like.

Now we can use ES6 syntax in our code and ES5 will be output. Change the index.js file to:

```

const str = 'World';

console.log(`Hello ${str}`);

```

Let's change our package.json file to create a build script

```

{
  "name": "your-project",
  "version": "1.0.0",
  "license": "MIT",
  "scripts": {
    "build": "babel src -d dist",
    "start": "yarn build && node dist",
  }
}

```

when you run `yarn start`, we run the build script first where babel builds a new version of your javascript code in a new folder, then node runs the code in that folder.

You can take a look at the generated code, it will look something like this depending on what browsers you specified in the `browserslist`.

```

"use strict";

var str = 'World';
console.log("Hello ".concat(str));

```

Play around with different ES6 features and browsers in your `browserslist` file to get a sense of what it's doing.

## Eslint

A linter gives you loads of rules to follow and suggests improvements to your code.  You can set up ESLint to work with VS Code in a really powerful way.

Install ESLint in your project by running the following command: `yarn add --dev eslint`.

Rather than writing out the rules we want to follow, we can simply follow a standard set of rules that someone else has written.  Luckily, AirBnB have written a great set of rules that has become something of a standard.

Install their rules by running the following command: `npx install-peerdeps --dev eslint-config-airbnb`.

I'm also adding a plug-in called `compat` which checks your browserlist and warns you if you use some JavaScript APIs that are not available in the browsers you need to support.

Create a `.eslintrc.json` file and add the following:

```

{
  "extends": ["airbnb"],
  "plugins": ["compat"],
}

```

If you're using VS Code, then there is a cool extension which gives you visual warnings and suggests remedies.  Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to give you these superpowers.

ESLint not only warns us when there are errors in our code but it can also automatically fix those errors. In VS Code, you can fix your errors by hover over the error (or hit `command + .`) and choose "Fix this problem".

I'm adding another script in my `package.json` file to supercharge this:

```

{
  "name": "your-project",
  "version": "1.0.0",
  "license": "MIT",
  "scripts": {
    "build": "babel src -d dist",
    "start": "yarn build && node dist",
    "test": "eslint --ignore-path .gitignore .",
    "fix": "eslint --ignore-path .gitignore . --fix",
  }
}

```

I've added a *test* script that will test everything (except files specified in my `.gitignore` file) and a *fix* script that will fix ALL the errors across my project.

## Prettier

Prettier formats your code automatically.  No more messing around aligning brackets or arguing with other developers over whether to use spaces or tabs.

`yarn add --dev prettier` installs the prettier package as a dev dependency. I'm adding a script to our package.json file:

`"format": "prettier --ignore-path .gitignore --write \"**/*.+(js|json)\""`

When we run this script, it rewrites any code in .js or .json files, that aren't in our gitignore file, in the prettier format.

You can play around with the rules in the [prettier playground](https://prettier.io/playground/), and save the output of `Copy config JSON` to your `.prettierrc.json` file.

You can install the prettier VS Code extension, by searching for `esbenp.prettier-vscode` in the `Search Extensions in Marketplace` in the *Extensions* window.  Add the following to your VS Code settings:

```

{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
}

```

Then you can use `CMD + Shift + P` and choose `Format Document` to format or you can add the following to format automatically each time you save a file:

```

{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
}

```

There are some eslint rules that prettier will automatically fix. We can set which rules eslint can ignore so we don't have to correct them or we can just use another package to help with this.

Run `yarn add --dev eslint-config-prettier` and add it to the extends part of your `.eslintrc` file.

```

{
  "extends": ["airbnb", "eslint-config-prettier"],
}

```

## Husky

Husky allows us to add git hooks.  By setting up a pre-commit hook, we automatically run eslint and prettier so that we don't commit any unlinted or unformatted code to our repository.

We're going to add `yarn add --dev husky4`, it's not the latest version but version 5 seems to be moving away from the simplicity of the previous versions, so I would stick with v.4.

As well as Husky, we're going to add lint-staged to help manage the two tests we want to run. `yarn add --dev lint-staged`.

Run `touch .huskyrc.json` and write the following in the newly created file:

```

{
  "hooks": {
    "pre-commit": "lint-staged"
  }
}


```

This will set up the pre-commit to run lint-staged.

Run `touch .lintstagedrc.json` and add the following:

```

{
  "**/*.+(js|json|jx)": ["eslint"],
  "**/*.+(js|json|jsx)": ["prettier --write", "git add"]
}


```

There we have it.  Our code will now lint and format automatically on save and you also have a number of tools at your disposal that will help you concentrate on coding.