
module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      '.tmp/public/js/lib.js',
      'bower_components/angular-mocks/angular-mocks.js',
      '.tmp/public/js/app.js',
      '.tmp/public/js/system_const.js',
      'app/tests/unit/modules/**/**.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
    ],

    reporters: ['dots'],

  });
};
