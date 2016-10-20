'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
	nome:String,
	idade: Number,
	telefone:String,
	email:String,
	cidade:String,
	estado:String,
	pais:String
};
const pessoaShema = new Schema(_schema);
 module.exports = mongoose.model('pessoas',pessoaShema);