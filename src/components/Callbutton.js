import React from 'react'

const Callbutton = ({onCall}) => {
  
  return (
    <div className='function-button' onClick={onCall}>
      <p>Call</p>
    </div>
  )
}

export default Callbutton