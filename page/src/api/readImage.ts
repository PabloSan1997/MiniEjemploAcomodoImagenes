import { numImage } from "../utilites/generarArregloNumeros";

export async function readImage(num: number): Promise<ImageResponse> {

    const data = await fetch(`http://localhost:3004/api/images/${num}/${numImage}`);
    const productos = await data.json();
    if (!data.ok) {
        throw productos;
    }
    return productos;
}


export async function readPokemon(num: number): Promise<ImageResponse> {
    console.log(num);
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numImage}&offset=${num}`);
    const resJson = await data.json() as { count: number, results: { url: string }[] };
    const pokemons = await Promise.all(resJson.results.map(async elemento => {
        const data1 = await fetch(elemento.url);
        const pokemon = await data1.json() as {
            id: number,
            name: string,
            sprites: {
                other: {
                    home: {
                        front_default: string
                    }
                }
            },
            species: {
                name: string
            },
            weight: number,
            height: number
            types: {
                type: {
                    name: string
                }
            }[]
        };
        const filtrar: Imagen = {
            id_image: pokemon.id.toString() + 'id',
            name: pokemon.name,
            image_url: pokemon.sprites.other.home.front_default,
            description: `Weight: ${pokemon.weight}, heigth: ${pokemon.height} Especie: ${pokemon.species.name} Tipo: ${pokemon.types[0].type.name}`
        }
        return filtrar;
    }))
    const solicitud: ImageResponse = {
        count: resJson.count,
        mostrarData: pokemons
    }
    return solicitud;
}