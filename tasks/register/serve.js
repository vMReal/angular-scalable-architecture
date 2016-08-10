module.exports = function (grunt) {
	grunt.registerTask('serve', 'Start serve', function (env) {

		switch (env) {
			case 'test':
				grunt.task.run('buildTest');
			case 'prod':
				grunt.task.run('buildProd');
				break;
			default :
				grunt.task.run('buildDev');
				break;
		}

		if (typeof env != 'undefined') {
			grunt.log.writeln('Start serve with env - ' + env);
			grunt.task.run('shell:serve:'+env);
		}
		else {
			grunt.log.writeln('Start serve');
			grunt.task.run('shell:serve');
		}
	});
};
