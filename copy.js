const cpx = require('cpx');
cpx.copy('./components/**/*.scss', './lib', function (){ console.log('done');});
