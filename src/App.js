import logo from './images/favicon.svg';
import './App.css';
import Dialbox from './components/Dialbox';
import Callbutton from './components/Callbutton';
import Deletebutton from './components/Deletebutton';
import NumberUI from './components/NumberUI';
import { useState} from 'react';

function App() {
  const [dialedNumber, setDialedNumber] = useState('')
  const [isCallClicked, setIsCallClicked] = useState(false)

  const playSound = () =>{
    const audio = new Audio('./light_switch.mp3')
    audio.play().catch((error)=>{
      console.log('Error playing audio:', error)
    })
  }

  const handleDial = (number) => {
    setDialedNumber(prev => prev + number)

  }

  const handleDelete = () =>{
    setDialedNumber(prev => prev.slice(0,-1))
    playSound()
  }
  const handleCall = () =>{
    playSound()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>Minji Phone</h1>
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
