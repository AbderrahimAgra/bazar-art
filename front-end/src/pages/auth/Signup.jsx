import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
    
    <div>Hello from signup</div>
    <Link
    to="/login"
    className="font-medium text-blue-600 hover:underline dark:text-blue-500" style={{ color: '#7ca3af' }}
  >
    Login
  </Link>
    </>
    
  )
}

export default Signup