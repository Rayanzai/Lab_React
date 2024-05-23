import { Link } from "react-router-dom";
import Profile from "./Profile";
import Gallery from "./Gallery";
import Jsx from "./Jsx";
import Avatar from "./Avatar";
import Data from "./Data"
import PackingList from "./PackingList";
import Recipes from "./Receita";
import TeaGathering from "./TeaGathering";

export default function Atv03(){
    return(
        <>
        <h1>Atividade 3</h1>
        <Profile />
        <hr/>
        <Gallery />
        <hr/>
        <Jsx />
        <hr/>
        <Avatar />
        <hr/>
        <Data />
        <hr/>
        <PackingList />
        <hr/>
        <Recipes />
        <hr/>
        <TeaGathering />

        <br />
        <Link to="/">Retornar para a Home</Link>
        </>
    )
}