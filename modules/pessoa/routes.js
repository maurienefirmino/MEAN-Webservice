'use strict';
const express = require('express');
const router = express.Router();
const pessoaModel = require('./model');

/* Rota que retorna todos os dados */

router.get('/', (req, res, next)=> {
	
	pessoaModel.read(req,res);
});

/* Rota que retorna uma pessoa pelo id */

router.get('/:id', (req, res, next)=> {
	
	const id = req.params.id;
	pessoaModel.readOne(req,res);
});

/* Rota que salva novos dados */

router.post('/', (req, res, next)=> {
	
	const body = req.body;
	pessoaModel.create(req,res,body);
});

/* Rota que edita  dados */

router.post('/:id', (req, res, next)=> {
	
	const id = req.params.id;
	const body = req.body;
	pessoaModel.update(req,res,body,id);
});

/* Rota que exclui  dados */

router.get('/delete/:id', (req, res, next)=> {
	
	const id = req.params.id;
	const query = {_id:id};
	pessoaModel.del(req,res,query);
});

module.exports = router;
