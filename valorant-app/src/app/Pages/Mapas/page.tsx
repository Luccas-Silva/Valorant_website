import "./Mapas.css"; 
import Image from "next/image";
import dados from "./mapas.json";
interface dados {
    src : string;
    alt : string;
}

export default function Mapas() {

    return (
        <>  
            <h1>Mapas</h1>
                {dados.map ((item : dados) =>(
                    <Image src={item.src} width={1000} height={550} alt={item.alt} />
                ))}
            
        
        </>
    );
}