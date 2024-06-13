import { useState } from "react";

export default function CharacterCounter(){
    const [texto, setTexto] = useState("");
    const [textoTamanho, setTextoTamanho] = useState(0);
    const [alfabeto, setAlfabeto] = useState(0);
    const [numeros, setNumeros] = useState(0);
    const [simbolos, setSimbolos] = useState(0);
    const [espacos, setEspacos] = useState(0);

    function Verificador(event) {
        var texto = event.target.value;
        var length = texto.length;
        var alfabetoTamanho = (texto.match(/\p{L}/gu) || []).length;
        var numerosTamanho = (texto.match(/\d/g) || []).length;
        var simbolosTamanho = (texto.match(/[^\w\s]/g) || []).length;
        var espacosTamanho = (texto.match(/\s/g) || []).length;


        setTexto(texto);
        setTextoTamanho(length);
        setAlfabeto(alfabetoTamanho);
        setNumeros(numerosTamanho);
        setSimbolos(simbolosTamanho);
        setEspacos(espacosTamanho);
    }

    return(
        <>
            <h2>Character Counter</h2>
            <input value={texto} onChange={Verificador} />
            <div>
                <p>Tamanho do Texto: {textoTamanho}</p>
                <p>Letras do Alfabeto: {alfabeto}</p>
                <p>Números: {numeros}</p>
                <p>Símbolos: {simbolos}</p>
                <p>Espaços: {espacos}</p>
            </div>
        </>
    )
}