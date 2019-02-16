module.exports = function(grunt) {
  
	// Project configuration.
	grunt.initConfig({
		// Read package.json
		pkg: grunt.file.readJSON('package.json'),
		
		// Compile Sass to CSS.
		sass: { // Task
		    dist: { // Target
			  	files: { // Dictionary of files
		        	'css/sass.compiled.css': ['css/sass.scss'] // 'destination': 'source(s)'
		      	}
		    }
		},
		
		// Concatenate CSS.
		concat: {
			options: {
				separator: '/* Start of next .css file */',
			},
			dist: {
				src: ['css/*.css'], // concatenate all files with the .css extension
				dest: 'css/main.css',
			}
		},
		
		// Minify CSS.
		cssmin: {
			dist: {
				files: [{
					expand: true, // Enable dynamic expansion.
					cwd: 'css', // Parent folder of original CSS
					src: ['main.css', '!*.min.css'], // Collect the parent folder files to include, exclude
					dest: 'css/', // Location of the resulting file
					ext: '.min.css' // Add new extension
				}]
			}
		},
		
		// Minify javascript file(s).
		uglify: {
		    options: { // Task-level options may go here, overriding task defaults.
		    	mangle: false,
		    	// the banner is inserted at the top of the output
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
		    },
		    dist: {
			    src: ['js/main.js'], // original file(s) to minify
			    dest: 'js/main.min.js' // location / new file name and extension
		    }
		},
		
		// Run predefined tasks whenever watched files change.
		watch: {
			sass: {
				files: ['css/*.scss', 'css/*.css'], // watch this folder/extension
				tasks: ['sass', 'concat', 'cssmin'], // run this task(s) when a change is made	
			},
			cssmin: {
				files: ['css/main.css'],
				tasks: ['cssmin'],	
			},
			uglify: {
				files: ['js/main.js'],
				tasks: ['uglify'],	
			}
		},
		
	});
	
	// Load task sass.
	grunt.loadNpmTasks('grunt-contrib-sass');
	
	// Load task concat.
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	// Load task cssmin.
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Load task uglify.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	// Load task watch.
	grunt.loadNpmTasks('grunt-contrib-watch');

	

	// Default alies for task(s).
	grunt.registerTask('default', ["sass", "concat", "cssmin", "uglify"]);
  
};