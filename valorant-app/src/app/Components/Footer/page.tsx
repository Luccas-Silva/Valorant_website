'use client'
import { useEffect } from "react";
import "./Footer.css";

export default function Footer() {
    useEffect(() => {
        console.log("Renderizado Componente");
    }, []);
    return (
        <>  
            <footer>
                <ul>
                    <li>Nome: Luccas Silva - RM: 552890</li>
                    <li>Nome: Bruno Burian - RM: 552863</li>
                    <li>Nome: Leonardo Chaves - RM: 552707</li>
                </ul>
            </footer>
        </>
    );
}