var connect = require('connect');
var serveStatic = require('serve-static');
//var config = require('./config/config.js');
var app = connect(); app.use(serveStatic('../studentApp'));
app.listen(8000);
console.log("angularKIP server has been started:>8000");
