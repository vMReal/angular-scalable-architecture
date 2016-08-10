


module.exports = function(grunt) {

	grunt.config.set('cssmin', {
		options: {
			keepSpecialComments: 0
		},
		main_lib_min: {
			expand: true,
			cwd: '.tmp/public/styles/',
			src: ['lib.css'],
			dest: '.tmp/public/styles/',
			ext: '.css'
		},
		main_app_min: {
			expand: true,
			cwd: '.tmp/public/styles/',
			src: ['app.css'],
			dest: '.tmp/public/styles/',
			ext: '.css'
		},
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};
