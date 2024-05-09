import React, {useState} from "react";
import imgHomem from "./Imagens/homem.png"
import imgMais from "./Imagens/mais.png"
import imgMenos from "./Imagens/menos.png"
import imgMulher from "./Imagens/mulher.png"
import imgReload from "./Imagens/reload.png"
import "./Contador.css"


export default function Contador(){

    const [contadorGlobal, setContadorGlobal] = useState(0);
    const [contarHomem, setContarHomem] = useState(0);
    const [contarMulher, setContarMulher] = useState(0);


    // GLOBAL
    function adicionar(){
        if(contadorGlobal >= 0){
            setContadorGlobal(contadorGlobal + 1);
        }
    }

    function remover(){
        if(contadorGlobal > 0){
            setContadorGlobal(contadorGlobal - 1);
        }
        
    }

    // HOMENS
    function adicionarContarHomem(){
        if(contarHomem >= 0){
            setContarHomem(contarHomem + 1);
            adicionar()
        }
        
    }
    function removerContarHomem(){
        if(contarHomem > 0){
            setContarHomem(contarHomem - 1);
            remover()
        }
        
    }

    // MULHERES
    function adicionarContarMulher(){
        if(contarMulher >= 0){
            setContarMulher(contarMulher + 1);
            adicionar()
        }
        
    }
    function removerContarMulher(){
        if(contarMulher > 0){
            setContarMulher(contarMulher - 1);
            remover()
        }  
    }

    // RELOAD
    function atualizarPagina(){
        window.location.reload();
    }

    return(
        <>
            <div className="Contador-total">
                <h1>Total</h1>
                <p>{contadorGlobal}</p>
                <img className="atualiza" src={imgReload} onClick={atualizarPagina} />
            </div>

            <div className="Contador-wrap">
                <div className="Contador-homem">
                    <img className="imgHomem" src={imgHomem} />
                    <div className="Wrap-Botoes">
                            
                        <img className="botoes" src={imgMais} onClick={adicionarContarHomem}/>
                        <img className="botoes" src={imgMenos} onClick={removerContarHomem}/>
                            
                    </div>
                    <div className="contador-so-genero">
                        <h3>Total Homens</h3>
                        <p>{contarHomem}</p>
                    </div>
                        
                </div>

                <div className="Contador-mulher">
                    <img className="imgMulher" src={imgMulher} />
                    <div className="Wrap-Botoes">

                        <img className="botoes" src={imgMais} onClick={adicionarContarMulher}/>
                        <img className="botoes" src={imgMenos} onClick={removerContarMulher}/>
                        
                    </div>
                    <div className="contador-so-genero">
                        <h3>Total Mulheres</h3>
                        <p>{contarMulher}</p>
                    </div>    
                </div>
            </div>
              
        </>
    )
}
