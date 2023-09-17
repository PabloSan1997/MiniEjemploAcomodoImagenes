/// <reference types="vite/client" />


type Children = {
    children: JSX.Element | JSX.Element[]
}

interface Imagen {
    id_image: string,
    image_url: string,
    name: string,
    description: string
}
interface ImageResponse{
    count:number,
    mostrarData:Imagen[]
}
interface BoomError {
    statusCode: number,
    error: string,
    message: string
}

interface Contexto{
    imagenes:Imagen[],
    setNumero(a:number):void,
    count:number,
    loading:boolean, 
    setLoading(a:boolean):void
}