import React from 'react'

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
      <img src="https://images.pexels.com/photos/14711370/pexels-photo-14711370.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="userpic" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://images.pexels.com/photos/14711370/pexels-photo-14711370.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="userpic" />
      </div>
    </div>
  )
}

export default Message