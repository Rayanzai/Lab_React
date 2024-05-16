import { Link } from "react-router-dom";
import Profile from "./Profile";
import Gallery from "./Gallery";
import Jsx from "./Jsx";
import Avatar from "./Avatar";
import Data from "./Data"

export default function Atv03(){
    return(
        <>
        <h1>Atividade 3</h1>
        <Profile />
        <Gallery />
        <Jsx />
        <Avatar />
        <Data />


        <br />
        <Link to="/">Retornar para a Home</Link>
        </>
    )
}