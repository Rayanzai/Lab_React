import { Link } from "react-router-dom";
import Toolbar from "./Toolbar";
import Gallery from "./Gallery"
import Counter from "./Counter";
import Form01 from "./Form01";
import MovingDot from "./MovingDots";
import Form02 from "./Form02";
import Form03 from "./Form03";
import List from "./List";
import List02 from "./List02";
import ShapeEditor from "./ShapeEditor";
import CounterList from "./CounterList";
import List03 from "./List03";
import List04 from "./List04";
import BucketList from "./BucketList";




export default function Atv04(){
    return(
        <>
        <h1>Atividade 4</h1>
        <Toolbar/>
        <hr/>
        <Gallery />
        <Counter />
        <Form01 />
        <hr/>
        <MovingDot/>
        <hr/>
        <Form02 />
        <hr />
        <Form03 />
        <hr/>
        <List/>
        <hr/>
        <List02/>
        <hr />
        <ShapeEditor/>
        <hr />
        <CounterList/>
        <hr/>
        <List03/>
        <hr/>
        <List04/>
        <hr/>
        <BucketList/>


        <br />
        <Link to="/">Retornar para a Home</Link>
        </>
    )
}
