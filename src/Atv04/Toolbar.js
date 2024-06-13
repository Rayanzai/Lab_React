function PlayButton({ movieName }){
    function handlePlayClick(){
        alert(`Playing ${movieName}`)
    }
    return(
        <button onClick={handlePlayClick}>Play "{movieName}"</button>
    );
}

function UploadButton(){
    return(
        <button onClick={() => alert("Uploading!")}>Upload Image</button>
    );
}

export default function Toolbar(){
    return(
        <>
            <h2>Toolbar</h2>
            <PlayButton movieName={"Rayan exercício"} />
            <UploadButton />

        </>
    )
}