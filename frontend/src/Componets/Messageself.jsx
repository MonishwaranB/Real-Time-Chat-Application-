import React from 'react'

function Messageself() {
  var props2={
    name:'you', message:'This is sample message  self'
  }
  return (
    <div className='self-message-container'>
        <div className='messageBox'>
          <p>{props2.message}</p>
          <p className='self-timeStamp'>12:00am</p>
        </div>

    </div>
  )
}

export default Messageself;