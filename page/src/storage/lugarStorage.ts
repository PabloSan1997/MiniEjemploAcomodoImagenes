

export function guardarLugar(num:number):void{
    localStorage.lugar=num;
}

export function leerLugar():number{
    if(!localStorage.lugar){
        guardarLugar(0);
    }
    return Number(localStorage.lugar);
}