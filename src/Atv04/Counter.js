import { useState } from "react";

export default function Counter(){
    const [numero, setNumero] = useState(0);
    return(
        <>
            <h2>Contador</h2>
            <h3>{numero}</h3>
            <button onClick={() => {
                setNumero(numero + 3);
                
            }}>
            +3</button>
        </>
    );
}