import { Link } from "react-router-dom";
import MultFunctional from "./MultiFunctional";
import CharacterCounter from "./CharacterCounter";

export default function Atv05(){
    return(
        <>
        <h1>Atividade 5</h1>
    
        <MultFunctional/>
        <br />
        <CharacterCounter/>
        <Link to="/">Retornar para a Home</Link>
        </>
    )
}