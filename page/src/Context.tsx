import React from 'react';
import {   readPokemon } from './api/readImage';


const Contexto = React.createContext({});

export function Provedor({children}:Children){
    const [imagenes, setImagenes] = React.useState<Imagen[]>([]);
    const [numero, setNumero] = React.useState(0);
    const [count, setCount] = React.useState<number>(0);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(()=>{
        (async ()=>{
            try {
                const data = await readPokemon(numero);
                setImagenes(data.mostrarData);
                setCount(data.count);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[loading]);
    return(
        <Contexto.Provider value={{
            imagenes,
            setNumero,
            count,
            loading, 
            setLoading
        }}>
            {children}
        </Contexto.Provider>
    );
}

export const UseContexot = () => React.useContext(Contexto) as Contexto;
