import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const { userName, setUserName } = useState('')

  const handleSubmit = (e) => {
    e.preventDefautlt()
    localStorage.setItem('userName', userName)
    navigate('/chat')
  }

  return (
    <form className='home_container' onSubmit={handleSubmit}>
      <h2 className='home_header'>Sign in to Open Chat</h2>
      <label htmlFor='userName'>Username</label>
      <input
        type='text'
        name='username'
        id='username'
        minLength={6}
        className='username_input'
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
      />
      <button className="home_cta">Sign In</button>
    </form>
  )
}

export default Home
