module.exports = function (grunt) {
	grunt.registerTask('buildDev', [
		'clean',
		'concat',
		'browserify',
		'ngconstant',
		'copy',
		'less',
	]);
};
