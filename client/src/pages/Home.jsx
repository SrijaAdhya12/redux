import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <div>
          <h1>Home</h1>
          <button className='border'>
          <Link to="/login" >Create Todos</Link>
          </button>
      </div>
      
  )
}

export default Home