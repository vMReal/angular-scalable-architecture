module.exports = function (grunt) {
	grunt.registerTask('buildProd', [
		'clean',
		'concat',
		'browserify',
		'ngconstant',
		'ngAnnotate',
		'copy',
		'less',
		'uglify',
		'cssmin',
	]);
};
