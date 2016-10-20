'use strict';
const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/webservice';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Conexão aberta em: ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Erro de Conexão: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Conexão interrompida');
});

mongoose.connection.on('open', function () {
  console.log('Conectado!');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Desconectado pelo webservice');
    process.exit(0);
  });
});