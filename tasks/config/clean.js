


module.exports = function(grunt) {

	grunt.config.set('clean', {
		dev: ['.tmp/public/**']
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
};
