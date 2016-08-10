


module.exports = function (grunt) {

    grunt.config.set('less', {
        app: {
            expand: true,
            files: {
                '.tmp/public/styles/app.css': ['app/modules/app/module.less']
            },
            options: {
                sourceMap: (process.env.NODE_ENV == 'prod') ? false : true,
                sourceMapFilename: '.tmp/public/styles/app.css.map',
                sourceMapURL: '/styles/app.css.map',
                sourceMapRootpath: '/',
            },
            plugins: [
                new (require('less-plugin-autoprefix'))({browsers: ["last 3 versions"]}),
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
};
