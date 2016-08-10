

module.exports = function (grunt) {

	grunt.config.set('shell', {
		serve: {
			command: function (env) {
				switch (env) {
					case 'dev':
					case 'test':
					case 'prod':
						return 'NODE_ENV=' + env + ' node_modules/http-server/bin/http-server -a localhost -p 1200 -c-1 ./.tmp/public';
						break;

					default :
						return 'node app.js';
						break;
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-shell');
};
