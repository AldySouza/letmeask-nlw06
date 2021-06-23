import { useState } from "react";

export function Button() { // named export
    //let counter = 0;
    const [counter, setCounter] = useState(0); //1° variavel é o valor deste estado, a 2° var é uma função que serve para alterarmos o valor da primeira

    function increment() {
        setCounter(counter + 1);     
    }

    return (
        <button onClick={increment}>
            {counter}
        </button>
    )
}

