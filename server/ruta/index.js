import express from 'express';
import { routeProduct } from './producto.js';

const mainTout = express.Router();

export function createApi(app){
	app.use('/api', mainTout);
	mainTout.use('/images', routeProduct);
	app.get('/', (req, res)=>{
		res.json({message:'Bienvenido a mi api'});
	});
}



