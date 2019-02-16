# Grunt

Basic project setup with Grunt.

### Overview

Using both css and scss; compile the scss  -> concatenating all css -> minify the css  -> use the min.css in index.html.

**CSS**
- `styles.css` and `sass.scss` are located in `css/`
- `sass.scss` is compiled into `sass.compiled.scss`
- `styles.css` and `sass.compiled.scss` are concatenated into `main.css`
- `main.css` is minified into `main.min.css`
- `main.min.css` is used in `index.html`

Minify the main.js and use it in index.html

**JS**
- `main.js` is located in `js/`
- `main.js` is minified into `main.min.js`
- `main.min.js` is used in `index.html`


## What's included?

- "grunt-contrib-sass": "^1.0.0"
- "grunt-contrib-concat": "^1.0.1"
- "grunt-contrib-cssmin": "^3.0.0"
- "grunt-contrib-uglify": "^4.0.0"
- "grunt-contrib-watch": "^1.1.0"
    
## Getting Started

Make sure you have Node.js and Grunt installed:

- Install Node.js from [http://nodejs.org](http://nodejs.org), or if you use [Homebrew](http://brew.sh/): `brew install node`
- Install Grunt's command line interface (CLI) globally with `npm install -g grunt-cli`
- Install project dependancies with `npm install`. Make sure you're in the project root.
- Verify Ruby is installed with `ruby -v` (needed for sass)
- After confirming Ruby is installed, run `npm install -g sass` to install Sass

You may need to run the install commands as admin, so for Mac, use `sudo`.

For more information on Grunt, see the [Getting Started](http://gruntjs.com/getting-started) guide.

## Verification

- `grunt --version` for grunt-cli and grunt versions
- `grunt --help` to see Options and Available tasks
- `ruby -v` to verify Ruby version

## File Structure & Order of Operations

**`package.json`** —

Define project settings in this file. All dependancies are listed here too.

**`Gruntfile.js`** —

This file contains all the tasks to be run.

**`node_modules/`** —

Required dependancies will be installed here, do not add to version control.

**`css/`** —

- `sass.scss` will be compiled too `sass.compiled.css`
- `*.css` files including the `sass.compiled.css` (if is exists) will be concatenated into `main.css`
- `main.css` will be minified too `main.min.css` 
- `main.min.css` is used in the `index.html`

**`js/`** —

- `main.js` will be  minified to `main.min.js`
- `main.min.js` is used in the `index.html`

**`index.html`** —

A basic HTML file using the css/main.min.css and js/main.min.js but is not required for the project.

## Included Grunt Tasks

`grunt` — ["sass", "concat", "cssmin", "uglify"]

`grunt watch` — Run sass, cssmin and uglify whenever files change. Use `ctrl + c` to end watch task.
