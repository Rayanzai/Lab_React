import React from 'react';

class Letreiro extends React.Component {
    constructor(props) {
        // POSICAO DE INICIO PRECISOU SER -1, POIS ESTAVA COMENDO UMA LETRA.
        super(props);
        this.textoCompleto = "Conheça a Fatec!";
        this.posicao = -1;
        this.state = {
            exibeTexto: "",
        };

        // Chama função a cada 2 milisegundos
        setInterval(() => {
            this.atualizaTexto();
        }, 200);
    }

    
    atualizaTexto() {
        // length precisa ser -1 por causa do vetor. Ultimo valor fica indefinido/vazio
        if (this.posicao < this.textoCompleto.length-1) {
            this.setState((prevState) => ({
                exibeTexto: prevState.exibeTexto + this.textoCompleto[this.posicao],
            }));
            this.posicao++;
        } 
        else {
            // ZERA TUDO E RECOMENÇA A FRASE
            this.posicao = -1;
            this.exibeTexto = "";
            this.setState(() => ({
                exibeTexto: "",
                posicao: -1
            }));
        }
    }

    render() {
        const {exibeTexto} = this.state;
        return (
        <>
            <h1>Letreiro</h1>
            <h2>{exibeTexto}</h2>
        </>
        );
    }
}

export default Letreiro;
