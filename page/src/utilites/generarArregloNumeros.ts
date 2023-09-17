export const numImage = 8;

export function generarArreglo(num:number){
    const data =[];
    const limite = Math.floor(num/numImage);
    for(let i=0;i<limite;i++){
        data.push(i);
    }
    return data;
}