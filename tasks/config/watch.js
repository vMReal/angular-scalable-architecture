/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 *
 */
module.exports = function(grunt) {

	grunt.config.set('watch', {
		scripts: {
			files: ['app/modules/**/*.js'],
			tasks: ['onScriptWatch'],
			options: {
				livereload: 35732,
			},
		},

		styles: {
			files: ['app/modules/**/*.less'],
			tasks: ['onStyleWatch'],
			options: {
				livereload: 35733,
			},
		},

		templates: {
			files: ['app/modules/**/*.html'],
			tasks: ['onTemplateWatch'],
			options: {
				livereload: 35734,
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};
