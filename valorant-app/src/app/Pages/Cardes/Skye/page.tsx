
import Image from "next/image";

import "../Cardes.css";

export default function Skye() {
    return (
        <>  
            <section className="Card">
                <Image className="" src="/assets/Agentes/Skye.svg" width={450} height={700} alt=""/>
                <div className="Card-text">
                    <h2>// FUNÇÃO</h2>
                    <h1>INICIADORA</h1>
                    <h2>// BIOGRAFIA</h2>
                    <p>Mandando um salve direto da Austrália, Skye e sua equipe de feras desbravam territórios hostis. Com seus poderes de cura e suas criações que partem pra cima dos inimigos, qualquer equipe ficará mais forte e mais segura tendo Skye como aliada.</p>
                    <hr/>
                </div>
            </section>
        </>
    );
}