import React from 'react';
import './MyStyles.css';

function Conversationsitem({ props }) {
  return (
    <div className='conversation-container'>
      <p className='con-icon'>{props.name[0]}</p>
      <p className='con-title'>{props.name}</p>
      <p className='con-lastMessage'>{props.lastMessage}</p>
      <p className='con-timeStamp'>{props.timeStamp}</p>
    </div>
  )
}

export default Conversationsitem;