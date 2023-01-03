import { useState } from 'react'
import './newsletter.css'
const Newsletter = () => {
    const [newsletterData, setNewsletterData] = useState({
        email: '',
        password: '',
        repeatPassword: '',
        subscribe: false
    })

    const [message, setMessage] = useState('')

    const handleData = (e) => {
        const {name, value, type, checked} = e.target

        setNewsletterData((prev)=> ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }) )
    }

    let isPassword = newsletterData.password === newsletterData.repeatPassword
    let isEmail = newsletterData.email.length >= 4

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newsletterData)

        let  error = 'error: please check input' 

        const success = 'succesful'

      
        isPassword &&  isEmail  ? setMessage(success) : setMessage(error)
    } 



    return (
        <div className="newsletter">
            <h2 className="news--header">Subscribe to newsletter</h2>
            <form className='form' onSubmit={handleSubmit}> 
                <input 
                type="email" 
                name="email" 
                id="email"
                className='input' 
                onChange={handleData}
                value={newsletterData.email}
                /> <br />
                <input 
                type="password" 
                name="password" 
                id="password" 
                className='input'
                onChange={handleData}
                value={newsletterData.password}
                /> 
                <br />
                <input 
                type="password" 
                name="repeatPassword" 
                id="repeat--password"
                onChange={handleData}
                className='input' 
                value={newsletterData.repeatPassword}
                /> <br />
                <span>
                <input 
                type='checkbox'
                name="subscribe" 
                onChange={handleData}
                id="radio--btn" 
                checked={newsletterData.subscribe}
                /> 
                <label htmlFor="radio--btn" className='rad-label'>I want to join newsletter</label>
                </span>
                <br />
                {message && <div className={isPassword && isEmail ? 'success' : 'error'}>{message}</div>}
                 <br />

               {isPassword && isEmail && <button className='btn--submit'>Submit</button>}
            </form>
        </div>
        )
    
    
}

export default Newsletter