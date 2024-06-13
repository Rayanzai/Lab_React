import { useState } from "react";

export default function MultFunctional(){
    const [valor, setValor] = useState(0);

    function soma() {
        setValor(valor+1);
    }

    function subtrai() {
        setValor(valor-1);
    }

    function multiplica() {
        setValor(valor*2);
    }

    function dividi() {
        setValor(valor/2);
    }

    function quadrado() {
        setValor(valor * valor);
    }

    function cubo() {
        setValor(valor * (valor * valor));
    }

    function zerar() {
        setValor(0);
    }

    return(
        <>
            <h2>Multi Functional Counter</h2>
            <p>{valor}</p>
            <div>
                <button onClick={soma}>+</button>
                <button onClick={subtrai}>-</button>
                <button onClick={multiplica}>*</button>
                <button onClick={dividi}>/</button>
                <button onClick={quadrado}>^2</button>
                <button onClick={cubo}>^3</button>
                <button onClick={zerar}>Zerar</button>
            </div>
        </>
    )
}
