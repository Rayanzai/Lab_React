import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <>
        <h1>Página Inicial</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/Atv01">Atividade 01</Link>
                </li>
                <li>
                    <Link to="/Atv02">Atividade 02</Link>
                </li>
                <li>
                    <Link to="/Atv03">Atividade 03</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}
export default Home