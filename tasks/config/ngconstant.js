

module.exports = function(grunt) {

    grunt.config.set('ngconstant', {
        systemConst: {
            options: {
                name: 'systemConst',
                dest: '.tmp/public/js/system_const.js',
                constants: {
                    SYSTEM_VERSION: grunt.file.readJSON('package.json').version,
                    SYSTEM_DESCRIPTION: grunt.file.readJSON('package.json').description,
                    SYSTEM_ENV: (process.env.NODE_ENV)? process.env.NODE_ENV : 'dev',
                    SYSTEM_DEBUG: (process.env.NODE_ENV == 'dev')
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-ng-constant');
};
