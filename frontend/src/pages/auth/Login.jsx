import React from 'react'

const Login = () => {
  return (
   
    <div className='text-black'>
      <form action="">
        <input type="text" placeholder='Email or Username' />
        <input type="password" placeholder='Password' />
        <button>Register Account</button>
        <h2>forgot Password?</h2>
        <p>Don't have an account? <a href="">Sign up</a></p>
      </form>
    </div>
  )
}

export default Login
