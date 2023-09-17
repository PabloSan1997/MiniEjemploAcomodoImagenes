import { faker } from '@faker-js/faker';

export function generarDatos() {
	const data = [];
	const limite = 200;
	for (let i = 0; i < limite; i++) {
		const imagen = {
			id_image: faker.string.uuid(),
			image_url: faker.image.url(),
			name: faker.person.fullName(),
			description: faker.commerce.productDescription(),
		};
		data.push(imagen);
	}
	return { count: data.length, data };
}
