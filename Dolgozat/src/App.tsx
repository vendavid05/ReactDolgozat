import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Gomb } from './components/Gomb.tsx';
import JatekTer from './components/JatekTer.tsx'



const KEZDOLISTA=[2,5,3,1,6,8,10,13,11,12,15,0,4,7,9,14]
const NYEROLISTA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
function App() {
  const [lista,setLista] = useState<number[]>(KEZDOLISTA);

  const nyert =lista.every((szam,i) => szam === NYEROLISTA[i])

  const kattintas  = (index : number)=> {
    if (nyert) return
  const [lepes, setLepes] = useState(0) 
  }
  function kivalaszt(index:number){
    const listaMasolat=[...lista]
    
  }
  
  const uresIndex = lista.indexOf(0);
 

  return (
    <>
      <header><h1>Tologatós</h1></header>
      <article>
         <JatekTer lista={lista} onClick={kattintas}/>
      </article>
      <footer><p>Vén Dávid</p></footer>
    </>
  )
}

export default App
