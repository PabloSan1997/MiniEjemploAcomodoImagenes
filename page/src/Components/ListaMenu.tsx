import { NavLink } from 'react-router-dom';
import { UseContexot } from '../Context';
import { generarArreglo, numImage } from '../utilites/generarArregloNumeros';
import '../estilos/listamenu.scss';
import {ChevronDoubleLeftIcon, ChevronDoubleRightIcon} from '@heroicons/react/24/solid';
import React from 'react';
import { guardarLugar, leerLugar } from '../storage/lugarStorage';

export function ListaMenu() {
    const { count, setLoading } = UseContexot();
    const arreglo = generarArreglo(count);
    const [margen, setMargen] = React.useState(leerLugar());
    const distancia = Math.floor(arreglo.length / numImage);
    const estilos = {
        width: `${distancia*100}%`,
        marginLeft:`${margen*100}%`
    }
    const mover=(direc:'der'|'iz')=>{
        if(direc==='der' && margen>-distancia+1){
            const cantidad = margen-1;
            setMargen(cantidad);
            guardarLugar(cantidad);
        }else if(direc=='iz' && margen<0){
            const cantidad = margen+1;
            setMargen(cantidad);
            guardarLugar(cantidad);
        }
    }
    const claseSelecionar = (e:{isActive:boolean, isPending:boolean}) =>e.isActive?'num selec':'num';
    return (
        <div className="area_menu">
            <ChevronDoubleLeftIcon className='flecha izquierda' onClick={()=>mover('iz')}/>
            <nav className="lista">
                <ul style={estilos}>
                    {arreglo.map(element => (
                        <li className='lis' key={element}>
                            <NavLink
                                to={`/images/${element}`}
                                className={claseSelecionar}
                                onClick={()=>setLoading(true)}
                            >{element}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <ChevronDoubleRightIcon className='flecha derecha' onClick={()=>mover('der')}/>
        </div>
    )
}
