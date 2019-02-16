# Grunt

Basic project setup with Grunt.

## What's included?

- "grunt-contrib-concat": "^1.0.1",
- "grunt-contrib-cssmin": "^3.0.0",
- "grunt-contrib-sass": "^1.0.0",
- "grunt-contrib-uglify": "^4.0.0",
- "grunt-contrib-watch": "^1.1.0"
    
## Getting Started

Make sure you have Node.js and Grunt installed:

- Install Node.js from [http://nodejs.org](http://nodejs.org), or if you use [Homebrew](http://brew.sh/): `brew install node`
- install Grunt's command line interface (CLI) globally with `npm install -g grunt-cli`
- Install project dependancies with `npm install`. Make sure you're in the project root.

You may need to run the install commands as admin, so for Mac, use `sudo npm install`.

For more information on Grunt, see the [Getting Started](http://gruntjs.com/getting-started) guide.

## File Structure

**`package.json`** —

Define project settings in this file. All dependancies are listed here too.

**`Gruntfile.js`** —

This file contains all the tasks to be run. It's heavily commented so check it out.

**`node_modules/`** —

Required dependancies are installed here, do not add to version control.

**`css/`** —

`sass/global.scss` will be compiled too `css/<package-name>.css`. Import all project Sass files in this file.

**`js/`** —

JavaScript files placed in `src/` will be tested with JShint, concatenated and minified to the root `js/` dir. `vendor/` should be used for vendor scripts, such as jQuery. Vendor scripts will not be tested with JShinted, concatenated or minified by default.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

