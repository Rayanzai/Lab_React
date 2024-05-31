import { Link } from "react-router-dom";
import Contador from "./Contador";

export default function Atv02(){
    return(
        <>
        <h1>Atividade 2</h1>
        <Contador />

        <br />
        <Link to="/">Retornar para a Home</Link>
        </>
    )
}