import { useParams } from 'react-router-dom';
import { UseContexot } from '../Context';
import React from 'react';
import { OneImage } from './OneImage';
import { ListaMenu } from './ListaMenu';
import '../estilos/images.scss';
import { numImage } from '../utilites/generarArregloNumeros';

export function Images() {
    const parametros = useParams();
    const { imagenes, setNumero } = UseContexot();
    React.useEffect(() => {
        const numero = Number(parametros.num);
        setNumero(numero*numImage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [parametros.num]);

    return (
        <>
            <div className="contenedor">
                {imagenes.map(element => (
                    <OneImage key={element.id_image} {...element} />
                ))}
            </div>
            <ListaMenu/>
        </>
    )
}
