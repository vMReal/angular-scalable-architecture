

module.exports = function(grunt) {

	grunt.config.set('ngAnnotate', {
		options: {
			singleQuotes: true,
		},
		app1: {
			files: {
				'.tmp/public/js/app.js': ['.tmp/public/js/app.js'],
			},
		},
	});

	grunt.loadNpmTasks('grunt-ng-annotate');
};
