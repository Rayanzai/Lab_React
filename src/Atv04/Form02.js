import { useState } from "react";

export default function Form02(){
    const [person, setPerson] = useState({
        firstName: "Rayan",
        lastName: "Anzai",
        email: "anzairayan@gmail.com"
    });

    function handleFirstNameChange(e){
        person.firstName = e.tanget.value;
    }

    function handleLastNameChange(e){
        person.lastName = e.target.value;
    }

    function handleEmailChange(e){
        person.email = e.target.value;
    }

    return(
        <>
            <label>
                First Name:
                <input value={person.firstName} onChange={handleFirstNameChange} />
            </label> 
            <br/>
            <label>
                Last Name:
                <input value={person.lastName} onChange={handleLastNameChange} />
            </label> 
            <br/>
            <label>
                Email:
                <input value={person.email} onChange={handleEmailChange} />
            </label> 
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>
        </>
    );
}