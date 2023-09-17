import express from 'express';
import { ImageController } from '../controller/imageContoller.js';

export const routeProduct = express.Router();

const controller = new ImageController();

routeProduct.get('/',async (req, res)=>{
	res.json({message:'Por favor agrega el limite y el offset de la imagen "/image/<min>/<max>"'});
});

routeProduct.get('/:min/:max', controller.getImage);