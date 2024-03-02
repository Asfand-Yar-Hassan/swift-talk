import React from 'react'
import { useNavigate } from 'react-router-dom'

const ChatBody = () => {
  const navigate = useNavigate()

  const handleLeaveChat = () => {
    localStorage.removeItem('username')
    navigate('/')
    window.location.reload()
  }

  return (
    <>
      <header className='chat_mainHeader'>
        <p>Hangout with Colleagues</p>
        <button className='leaveChat_btn' onClick={handleLeaveChat}>
          Leave Chat
        </button>
      </header>
      {/* Message container for the message sent by you */}
      <div className='message_container'>
        <div className='message_chats'>
          <p className='sender_name'>You</p>
          <div className='message_sender'>
            <p>Hello there!</p>
          </div>
      </div>

        {/* Message container for the received message */}
        <div className='message_chats'>
          <p>Other</p>
          <div className='message_recipient'>
            <p>Hey, I'm good, you?</p>
          </div>
        </div>

        {/* This is triggered when someone is typing */}
        <div className="message_status">
         <p>Someone is typing....</p>
        </div>
      </div>
    </>
  )
}
