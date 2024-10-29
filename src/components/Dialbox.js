import React from 'react'

const Dialbox = ({onDial}) => {

  const playSound = () =>{
    const audio = new Audio('./light_switch.mp3')
    audio.play().catch((error)=>{
      console.log('Error playing audio:', error)
    })
  }
  const handleClick = (digit) =>{
    onDial(digit)
    playSound()
  }

  return (
    <div className='phone-container'>
      {[...Array(9)].map((_, i) => (
      <div key={i} className="digit-box" onClick={() => handleClick(i + 1)}>
      {i + 1}
      </div>
      ))}
      <div key={'*'} className="digit-box" onClick={() => handleClick('*')} >*</div>
      <div key={0} className="digit-box" onClick={() => handleClick(0)}>0</div>
      <div key={'#'} className="digit-box" onClick={() => handleClick('#')}>#</div>

    </div>
  )
}

export default Dialbox