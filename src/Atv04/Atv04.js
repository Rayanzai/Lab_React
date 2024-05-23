import { Link } from "react-router-dom";
import Toolbar from "./Toolbar";
import Gallery from "./Gallery"
import Counter from "./Counter";
import Form01 from "./Form01";

export default function Atv04(){
    return(
        <>
        <h1>Atividade 4</h1>
        <Toolbar/>
        <hr/>
        <Gallery />
        <Counter />
        <Form01 />



        <br />
        <Link to="/">Retornar para a Home</Link>
        </>
    )
}