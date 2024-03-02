import React from 'react'
import ChatBar from './ChatBar.js'
import ChatBody from './ChatBody.js'
import ChatFooter from './ChatFooter.js'

const ChatPage = ({ socket }) => {
  return (
    <div className='chat'>
      <ChatBar />
      <div className="chat_main">
       <ChatBody/>
       <ChatFooter socket={socket}/>
      </div>
    </div>
  )
}

export default ChatPage
