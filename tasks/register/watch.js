module.exports = function (grunt) {
	grunt.registerTask('onScriptWatch', [
		'browserify',
		'ngconstant'
	]);

	grunt.registerTask('onStyleWatch', [
		'less:app',
	]);

	grunt.registerTask('onTemplateWatch', [
		'copy:templates',
		'copy:layouts'
	]);
};
