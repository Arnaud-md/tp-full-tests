import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { calculerHeure } from './heure';
import { setDefaultResultOrder } from 'dns';

function App() {
  let [lune, setLune] = useState(0);
  let [terre, setTerre] = useState(0);
  let [soleil, setSoleil] = useState(0);
  let [time, setTime] = useState("");
  let [error, setError] = useState(false);
  const handleChangeLune = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('new value', e.target.value)
    const update=async()=>{
      setLune(parseInt(e.target.value));
    }
    update();
  },[])
  const handleChangeTerre = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('new value', e.target.value)
    const update=async()=>{
      setTerre(parseInt(e.target.value));
    }
    update();
  },[])
  const handleChangeSoleil = useCallback(async(e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('new value', e.target.value)
      setSoleil(parseInt(e.target.value));
  },[])
  const handleClick = useCallback(async()=>{
    if ((lune!==1&&lune!==2)||(terre!==1&&terre!==2)||(soleil!==1&&soleil!==2)) {
      setError(true);
    }
    else {
    const jupiterTime = calculerHeure(lune,terre,soleil);
    setTime(jupiterTime);
    }
    
  },[lune,terre,soleil,time])

  return (
    <>
      <div>
        <div id="errormsg">{error ? "Vous devez entrer comme valeurs 1 ou 2" : ""}</div>
        <p>Cadran de la lune</p><input type='number' id='moon' onChange={handleChangeLune}></input>
        <p>Cadran de la terre</p><input type='number' id='earth' onChange={handleChangeTerre}></input>
        <p>Cadran du soleil</p><input type='number' id='sun' onChange={handleChangeSoleil}></input>
        <div><button id='btn' onClick={handleClick}>Valider</button></div>
        <p>{time==="" ? "": "Zone de temps de Jupiter : "+time}</p>
      </div>
    </>
  )
}

export default App
