import {io} from "socket.io-client"
import './App.css'

const socket = io.connect("http://localhost:4000")

function App() {
  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}

export default App
