import { useState } from "react";
import { sculptureList } from "./Data";

export default function Gallery(){
    const [index, setIndex] = useState(0);
    const [mostrarMais, setmostrarMais] = useState(false);

    function handleProximoClick(){
        setIndex(index + 1)
    }

    function handleMaisClick(){
        setmostrarMais(!mostrarMais);
    }

    let escultura = sculptureList[index];
    return(
        <>
            <h2>GALLERIA</h2>
            <button onClick={handleProximoClick}>Próximo</button>
            <h2>
                <i>{escultura.name}</i>
                by {escultura.artist}
            </h2>

            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMaisClick}>
                {mostrarMais ? 'Esconder' : "Mostrar"} details
            </button>
            {mostrarMais && <p>{escultura.description}</p>}
            <img
                src={escultura.url}
                alt={escultura.alt} 
            />
        </>
    );
}