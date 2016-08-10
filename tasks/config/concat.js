


module.exports = function (grunt) {

	grunt.config.set('concat', {
		options: {
			banner: '<%= banner %>',
			stripBanners: true
		},
		lib_js: { //------- .lib.js -------
			src: [
				'bower_components/angular/angular.js',
				'bower_components/angular-route/angular-route.js',
				'bower_components/angular-resource/angular-resource.js',
				'bower_components/angular-translate/angular-translate.js',
				'bower_components/underscore/underscore-min.js'
			],
			dest: '.tmp/public/js/lib.js'
		},


		main_lib_css: { //------- .lib.css -------
			src: [
				'bower_components/animate.css/animate.min.css',
				'bower_components/font-awesome/css/font-awesome.min.css',
				'bower_components/simple-line-icons/css/simple-line-icons.css'
			],
			dest: '.tmp/public/styles/lib.css'
		},
	});


	grunt.loadNpmTasks('grunt-contrib-concat');
};
