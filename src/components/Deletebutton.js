import React from 'react'

const Deletebutton = ({onDelete}) => {
  return (
    <div className='function-button' onClick={onDelete}>Delete
    </div>
  )
}

export default Deletebutton