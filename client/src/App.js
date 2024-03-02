import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { io } from 'socket.io-client'
import './App.css'
import Home from './components/Home.js'
import ChatPage from './components/ChatPage.js'

const socket = io.connect('http://localhost:4000')

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home socket={socket}/>}></Route>
          <Route path='/chat' element={<ChatPage socket={socket}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
