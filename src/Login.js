import React, {useState} from 'react'
import './css/Login.scss'

const Login = () => {

  const [email, setEmail] = useState('')

return (
    <div className='loginContainer'>
        <img src='./logo-r.svg' height={20} alt='green energy logo'/>
        <h1 className='heading'>Example login screen </h1>
        <h2 className='subHeader'>Getting started with Green.</h2>
        <form onSubmit={e => {
            e.preventDefault()
            alert(`You have logged in using email: ${email}`)
        }}>
            <label className='email-label' htmlFor='email'>Email Address</label>
            <input 
            className='focus'
            type='email' 
            id='email' 
            required
            name='email'
            onChange={e => setEmail(e.target.value)}/>
            <div className='remember-device'>
                <input type='checkbox'/>
                <label className='remember-label'>Remember this device</label>
            </div>
            <button type='submit'>Sign In</button>
        </form>
        
    </div>
)
}

 
export default Login;