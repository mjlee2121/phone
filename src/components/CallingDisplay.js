import React, { useEffect, useState } from 'react'

const CallingDisplay = ({number, updateIsCallClicked}) => {
  const [dots, setDots] = useState('')

  const handleCancelButton = () =>{
    updateIsCallClicked(false)
    
  }

  useEffect(()=>{
    
    const interval = setInterval(()=>{
      setDots((prevDots) => (prevDots.length <3 ? prevDots + '.':''))
    }, 1000)
    return () => clearInterval(interval)
  },[])

  return (
    <div>
      <div className='on-overlay'>
      
        <div className='little-block'>
          <div className="fa-regular fa-user" />
          <p>{number}</p>
          <div className='call-text' style={{'color': 'black'}}>Calling{dots}</div>
          <div className='cancel-call' onClick={handleCancelButton} >Cancel</div>
        </div>
        
      </div>
      

    </div>
  )
}

export default CallingDisplay