import { UseContexot } from "../Context";
import '../estilos/header.scss';

export function Header(){
    const {count} = UseContexot();
    return (
        <header>
            <h1>Mis imagenes</h1>
            <p>Total de imagenes: <span>{count}</span></p>
        </header>
    );
}