import Relogio from "./Componentes/Relogio";
import Letreiro from "./Componentes/Letreiro";
import { Link } from "react-router-dom";

export default function Atv01(){
    return(
        <>
        <h1>Atividade 1</h1>
        <Relogio />
        <Letreiro />

        <br />
        <Link to="/">Retornar para a Home</Link>
        </>
    )
}