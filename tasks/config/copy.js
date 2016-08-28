


module.exports = function(grunt) {

	grunt.config.set('copy', {
		awesome_fonts: {
			expand: true,
			src: '**',
			dest: '.tmp/public/fonts/',
			cwd: 'bower_components/font-awesome/fonts',
			flatten: true,
			filter: 'isFile'
		},


		app_fonts: {
			expand: true,
			src: getPaths( 'fonts', ['otf', 'eot', 'svg', 'ttf', 'woff', 'woff2'] ),
			dest: '.tmp/public/',
			cwd: 'app/modules/',
			flatten: false,
			filter: 'isFile'
		},

		app_images: {
			expand: true,
			src: getPaths( 'images', ['png', 'jpg', 'jpeg', 'gif', 'ico'] ),
			dest: '.tmp/public/',
			cwd: 'app/modules/',
			flatten: false,
			filter: 'isFile'
		},

		templates: {
			expand: true,
			src: getPaths( 'templates', ['html'] ),
			dest: '.tmp/public/',
			cwd: 'app/modules/',
			flatten: false,
			filter: 'isFile'
		},

		layouts: {
			expand: true,
			src: '**',
			dest: '.tmp/public/',
			cwd: 'app/layouts',
			flatten: true,
			filter: 'isFile'
		},

		example_api: {
			expand: true,
			src: ['**/**.json'],
			dest: '.tmp/public/',
			cwd: 'app/example_api/',
			flatten: false,
			filter: 'isFile'
		},
	});

	function getPaths(folder, formats) {
		var paths = [];
		for (var key in formats) {
			paths.push( '**/' +folder +'/*.' +formats[key] );
			paths.push( '**/' +folder +'/**/*.' +formats[key] );
		}
		return paths;
	}

	grunt.loadNpmTasks('grunt-contrib-copy');
};
