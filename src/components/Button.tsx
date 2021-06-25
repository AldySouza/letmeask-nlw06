import { ButtonHTMLAttributes } from 'react';
import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) { // named export
    return (
        <button className="button" {...props} />
    )
}


//let counter = 0;
//1° variavel é o valor deste estado, a 2° var é uma função que serve para alterarmos o valor da primeira
