import express from 'express';
const subroute = express.Router();

subroute.get('/', (req, res) => {
	console.log('hit subroute');
	res.send('hello from another router!');
});

subroute.get('/:id', (req, res) => {
	console.log('hit subroute with id');
	res.send('hello from a subroute with id');
});



module.exports = subroute;