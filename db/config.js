'use strict';
const mongoose = require('mongoose');
const options = {
	db: { native_parser: true }  
	, server: { poolSize: 5 }
	, replset: { rs_name: 'replica_set' }
};

const dbURI = 'mongodb://localhost/webservice/?replicaSet=replica_set';

mongoose.connect(dbURI,options);

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