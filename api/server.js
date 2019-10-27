'use strict';

var cluster = require('cluster');
var os = require('os');

// The cluster management code, which will run an instance of the application
// on each CPU core.
if(cluster.isMaster) {

  // Set up a worker process on each core.
  var numWorkers = os.cpus().length;
  for(var i = 0; i < numWorkers; i++) {
      cluster.fork();
  }

  cluster.on('online', function(worker) {
      //console.log('Iniciando processo' + worker.process.pid);
  });

  cluster.on('exit', function(worker, code, signal) {     
      cluster.fork();
  });
  return;
}

// The main app, an instance of which will run on each worker process.
const app = require('./src/app');
var http = require('http');
var port = process.env.PORT || '8080';
var server = http.createServer(app);
server.listen(port, function() {
  console.log('Iniciando servidor no processo ' + process.pid);
});