import React from 'react'

const Callbutton = ({onCall}) => {
  
  return (
    <div className='function-button' onClick={onCall}>Call</div>
  )
}

export default Callbutton