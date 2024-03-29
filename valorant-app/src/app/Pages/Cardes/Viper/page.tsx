'use client'
import Image from "next/image";
import CardAgentes from "@/app/Components/CardAgentes/page";
import "../Cardes.css";
import { useEffect } from "react";

export default function Viper() {
    useEffect(() => {
        console.log("Renderizado Componente Card");
    }, []);
    
    return (
        <>  
            <section className="Card">
                <Image className="" src="/assets/Agentes/Viper.svg" width={450} height={700} alt=""/>
                <div className="Card-text">
                    <h2>// FUNÇÃO</h2>
                    <h1>CONTROLADORA</h1>
                    <h2>// BIOGRAFIA</h2>
                    <p>Viper, a química dos Estados Unidos, emprega uma variedade de dispositivos químicos venenosos para controlar o campo de batalha e prejudicar a visão do inimigo. Se as toxinas não matarem a presa, seus jogos mentais certamente o farão.</p>
                    <hr/>
                </div>
            </section>
            <section className='container_agentes'>
                <CardAgentes/>
            </section> 
        </>
    );
}