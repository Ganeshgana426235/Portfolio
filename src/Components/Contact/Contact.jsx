import React from 'react'
import './Contact.css'
import call from '../../assets/call.svg'
import email from '../../assets/email.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import leetcode from '../../assets/leetcode.svg'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d7e602f4-1c04-454b-83e8-7449e649cc0a");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    

  return (
    <div className='contact' id='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's talk</h1>
                <p>I am currently available to take proJects</p>
                <div className='contact-details'>
                   <img src={call} className='contact-img' alt=""></img> : 8309082295
                </div>
                <div className='contact-details'>
                    <img src={email} className='contact-img' alt=''></img> : yerranagulaganesh426235@gmail.com
                </div>
                <div className='social-media'>
                <a href="https://www.linkedin.com/in/yerranagula-ganesh-22b362263" target='_blank' rel="noopener noreferrer">
                            <img src={linkedin} alt="Linked In"></img>
                            </a>
                <a href="https://github.com/Ganeshgana426235" target='_blank' rel="noopener noreferrer">
                <img src={github} alt="GitHub"></img></a>
                <a href="https://leetcode.com/u/Ganeshgana4262/" target='_blank' rel="noopener noreferrer">
                <img src={leetcode} alt="Leetcode"></img></a>
            </div>
            </div>
        <div className='contact-right'>
            <form onSubmit={onSubmit} className='contact-rightform'>
                <label>Your Name</label>
                <input required type='text' placeholder='Enter your name' name='name'>
                </input>
                <label>
                    Your Email
                </label>
                <input required type="email" placeholder='Enter your email' name='email'>
                </input>
                <label>
                    Your Message
                </label>
                <textarea required type='text' placeholder='Enter your Message' name="message"></textarea>
                <span className="formspan">{result}</span>
                <button type='submit' className='submit'>Submit</button>
            </form>
            
        </div>
        </div>
    </div>
  )
}

export default Contact
