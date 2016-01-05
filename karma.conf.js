// Karma configuration
// Configurar por IVAN DIESEL

module.exports = function(config) {
  config.set({

    basePath: './',
    frameworks: ['jasmine', 'requirejs'],
    plugins: ['karma-phantomjs-launcher','karma-jasmine','karma-coverage','karma-requirejs'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-route/angular-route.min.js',
      'node_modules/angularjs-datepicker/dist/angular-datepicker.min.js',
      'node_modules/angular/d3.min.js',
      {pattern: 'src/main/**/*.js', included: false},
      {pattern: 'src/test/unitario/**/*-spec.js', included: false},
      'src/test/test-main.js',
    ],
    exclude: [
    ],
    preprocessors: {
      'src/**/*.js': ['coverage']

    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
