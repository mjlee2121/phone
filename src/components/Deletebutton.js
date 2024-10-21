import React from 'react'

const Deletebutton = ({onDelete}) => {
  return (
    <div className='function-button' onClick={onDelete}>
      <p>Delete</p>
    </div>
  )
}

export default Deletebutton