


module.exports = function(grunt) {

	grunt.config.set('uglify', {
		main_lib_js: {
			files: {
				'.tmp/public/js/lib.js': ['.tmp/public/js/lib.js']
			}
		},
		app_lib_js: {
			files: {
				'.tmp/public/js/app.js': ['.tmp/public/js/app.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};
