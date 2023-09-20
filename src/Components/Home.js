import React from 'react'
import "./Home.css"
import Button from 'react-bootstrap/Button';
const Home = () => {
    return (
        <div className='Container home_container'>
            <div className='home_innerdiv'>
                <div className='left_div'>
                    <h2>Welcome to <span className='text'>Dhruv Kurliye!</span></h2>
                    <p>Welcome to my Portfolio, I am a computer Engineering Student from Bharati Vidyapeeth's College of Engineering, Pune. Here you will find my work i.e projects & skills. You can also checkout my Resume down below  👇  </p> <hr />
                    <div> <Button variant="secondary" className='Button'>Projects</Button>{' '}
                        <Button variant="dark" className='Button'>Resume</Button></div>
                </div>
                <div className='right_div'>
                    <img src="undraw_code_thinking_re_gka2.svg" className="pic"alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home