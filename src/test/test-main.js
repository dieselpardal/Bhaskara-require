var TEST_REGEXP = /(spec|test)\.js$/i;
var allTestFiles = [];

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
    allTestFiles.push(normalizedTestModule);
  }
});

require({

  baseUrl: '/base',

  paths: {
        'src': 'src/main'
          },

  deps: allTestFiles,

  callback: window.__karma__.start
});