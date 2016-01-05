module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js',
              'src/main/**/*.js',
              'src/test/unitario/**/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
jasmine: {
        src: [
              'node_modules/angular/angular.js',
              'node_modules/angular-mocks/angular-mocks.js',
              'node_modules/angular-route/angular-route.min.js',
              'node_modules/angularjs-datepicker/dist/angular-datepicker.min.js',
              'node_modules/angular/d3.min.js',
              'src/main/**/*.js'],
      options: {
       specs: 'src/test/unitario/**/*-spec.js'
        }
   },
    'http-server': {
      'root': {
        root: '',
        port: 8300,
        host: '0.0.0.0',
        https: false,
        openBrowser : false
        }
      }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', 'jshint');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('test', ['jshint', 'jasmine']);
};
