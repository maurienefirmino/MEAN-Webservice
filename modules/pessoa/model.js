'use strict';
const pessoaModel = require('./schema');

function read(req,res){
	pessoaModel.find({},(err,data)=>{
		if(err) return console.log('Error: ', err);
		res.json(data);
	});
}

function readOne(req,res,query){
	pessoaModel.findOne(query,{},(err,data)=>{
		if(err) return console.log('Error: ', err);
		res.json(data);
	});
}

function create(req,res,body){
	pessoaModel.create(body,(err,data)=>{
		if(err) return console.log('Error: ', err);
		res.json(data);
	});
}

function del(req,res,query){
	pessoaModel.remove(query,(err,data)=>{
		if(err) return console.log('Error: ', err);
		res.json(data);
	});
}


function update(req,res,body,id){
	pessoaModel.update({"_id":id},body,{multi:false},(err,data)=>{
		if(err) return console.log('Error: ', err);
		res.json(data);
	});
}

const CRUD = {
	create,
	read,
	del,
	readOne,
	update
};

module.exports = CRUD;