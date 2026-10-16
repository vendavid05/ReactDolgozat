import { Gomb } from './Gomb.tsx';
import './JatekTer.css'

interface JatekTerProps {
    lista:number[];
    onKattintas: (index:number) => void;
}
 function JatekTer({lista : onKattintas}:JatekTerProps){
return (
    <>
            <div className="JatekTarolo">
            {
                lista.map((szam,i)=>{
                    return (
                        <Gomb  key={i} 
                        ertek={szam}
                        onClick={() => onKattintas(i)}/>
                    )
                })
            }
            </div>
        </>

)
}
export default JatekTer