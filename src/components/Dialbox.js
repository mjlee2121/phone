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
      <div className='digit-box' onClick={()=>handleClick('1')}>1</div>
      <div className='digit-box' onClick={()=>handleClick('2')}>2</div>
      <div className='digit-box' onClick={()=>handleClick('3')}>3</div>
      <div className='digit-box' onClick={()=>handleClick('4')}>4</div>
      <div className='digit-box' onClick={()=>handleClick('5')}>5</div>
      <div className='digit-box' onClick={()=>handleClick('6')}>6</div>
      <div className='digit-box' onClick={()=>handleClick('7')}>7</div>
      <div className='digit-box' onClick={()=>handleClick('8')}>8</div>
      <div className='digit-box' onClick={()=>handleClick('9')}>9</div>
      <div className='digit-box' onClick={()=>handleClick('*')}>*</div>
      <div className='digit-box' onClick={()=>handleClick('0')}>0</div>
      <div className='digit-box' onClick={()=>handleClick('#')}>#</div>

    </div>
  )
}

export default Dialbox