


module.exports = function(grunt) {

	grunt.config.set('browserify', {
		dist: {
			options: {
				path: __dirname,
				transform: [["babelify", {presets: ["es2015"]}]]
			},
			files: {
				".tmp/public/js/app.js": "app/modules/app/module.js",
			},
			alias: {
				'angular': './bower_components/angular/angular.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
};
