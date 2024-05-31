import { useState } from "react";

export default function Form01(){
    const [to, setTo] = useState("Alice");
    const [message, setMessage] = useState("Olá, tudo bem?");

    function handleSubmit(e){
        e.preventDefault();
        setTimeout(() => {
            alert(`Você disse ${message} para ${to}`);
        }, 5000);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                To: {' '}
                <select value={to} onChange={e => setTo(e.target.value)}>
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                </select>
            </label>
            <textarea placeholder="Mensagem" value={message} onChange={e => setMessage(e.target.value)} />
            <button type="Submit">Enviar</button>
        </form>
    )
}