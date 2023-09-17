import { generarDatos } from '../faker/generarDatos.js';
import boom from '@hapi/boom';
const data = generarDatos();

export class ImageController {
	async getImage(req, res, next) {
		try {
			const { min, max } = req.params;
			const minimo = parseInt(min);
			const maximo = parseInt(max);
			if(!maximo || !min){
				throw boom.badData('Los parametros deben ser numericos');
			}
			const clonar = [...data.data];
			const mostrarData = clonar.splice(minimo, maximo);
			res.json({ count: data.count, mostrarData });
		} catch (error) {
			next(error);
		}
	}
}
