import logo from './images/favicon.svg';
import './App.css';
import Dialbox from './components/Dialbox';
import Callbutton from './components/Callbutton';
import Deletebutton from './components/Deletebutton';
import NumberUI from './components/NumberUI';
import { useState, useRef, useEffect} from 'react';
import CallingDisplay from './components/CallingDisplay';

function App() {
  const [dialedNumber, setDialedNumber] = useState('')
  const [isCallClicked, setIsCallClicked] = useState(false)
  const audioRef = useRef(null)

  const playClickSound = () =>{
    const audio = new Audio('./light_switch.mp3')
    audio.play().catch((error)=>{
      console.log('Error playing audio:', error)
    })
  }

  useEffect(()=>{
    // initialize the audio object once only
    audioRef.current = new Audio('../../phone_outgoing_call.mp3')
    return ()=>{
      audioRef.current.pause()
      audioRef.current = null
    }
  },[])
  
  useEffect(()=>{
    if (isCallClicked){
      audioRef.current.play().catch((error)=>{
        console.log('Error playing audio:', error)
      })
    } else{
      audioRef.current.pause()
      audioRef.current.currentTimee = 0;
    }
  },[isCallClicked])
  
  const handleDial = (number) => {
    setDialedNumber(prev => prev + number)
  }

  const handleDelete = () =>{
    setDialedNumber(prev => prev.slice(0,-1))
    playClickSound()
  }
  
  const handleCall = () =>{
    setIsCallClicked(true)
  }

  const updateClassName = (isCallClicked) =>{
    if (isCallClicked===true){
      return 'overlay'
    }
    else {
      return 'transparent'
    }
  }

  const updateIsCallClicked = (newState) =>{
    setIsCallClicked(newState)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className= {updateClassName(isCallClicked)}>
          <CallingDisplay number={dialedNumber} updateIsCallClicked={updateIsCallClicked}/>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
          <h1>Phone</h1>
          <NumberUI number={dialedNumber}/>
          <Dialbox onDial={handleDial}/>
          <div className='function-button-container'>
            <Callbutton onCall={handleCall}/>
            <Deletebutton onDelete={handleDelete}/>

          </div>

          
      </header>
    </div>
  );
}

export default App;
