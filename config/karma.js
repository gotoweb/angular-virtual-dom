module.exports = function (karma) {

  var files = require('../files').files;

  karma.set({
    basePath: '..',
    // files: [].concat(files.angular('1.3.12'), files.lib, files.testLib, files.src, files.test),
    files: [].concat(files.angular('1.3.12'), 'build/angular-virtual-dom.js', files.testLib, files.test),
    logLevel: karma.LOG_DEBUG,
    browsers: [ 'PhantomJS' ]
  });

};
