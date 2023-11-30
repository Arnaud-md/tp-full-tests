import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { calculerHeure } from './heure';

function App() {
  let [lune, setLune] = useState(0);
  let [terre, setTerre] = useState(0);
  let [soleil, setSoleil] = useState(0);
  let [time, setTime] = useState("");
  const handleChangeLune = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('new value', e.target.value)
    const update=async()=>{
      setLune(parseInt(e.target.value));
    }
    update();
  },[lune])
  const handleChangeTerre = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('new value', e.target.value)
    const update=async()=>{
      setTerre(parseInt(e.target.value));
    }
    update();
  },[terre])
  const handleChangeSoleil = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('new value', e.target.value)
    const update=async()=>{
      setSoleil(parseInt(e.target.value));
    }
    update();
  },[soleil])
  const handleClick = useCallback(async()=>{
    const jupiterTime = calculerHeure(lune,terre,soleil);
    setTime(jupiterTime);
  },[lune,terre,soleil,time])

  return (
    <>
      <div>
        <p>Cadran de la lune</p><input type='number' onChange={handleChangeLune}></input>
        <p>Cadran de la terre</p><input type='number' onChange={handleChangeTerre}></input>
        <p>Cadran du soleil</p><input type='number' onChange={handleChangeSoleil}></input>
        <div><button id='btn' onClick={handleClick}>Valider</button></div>
        <p>{time==="" ? "": "Zone de temps de Jupiter : "+time}</p>
      </div>
    </>
  )
}

export default App
