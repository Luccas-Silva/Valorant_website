import Image from "next/image";
import armas from "./arsenal.json";
import './CardArsenal.css';

interface Armas {
    name : string;
    src : string;
    alt : string;
    text : string;
}

export default function CardArsenal() {
    return (
        <>  
            {
                armas.map((info : Armas) =>(
                    <section className="CardsArsenal">
                        <h1>{info.name}</h1>
                        <Image src={info.src} width={500} height={200} alt={info.alt} />
                        <p>{info.text}</p>
                    </section>
                ))
            }
                
        </>
    );
}