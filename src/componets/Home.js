import React from 'react';
import '../css/home.css'
import {BsLinkedin,BsTwitter,BsWhatsapp,BsFacebook,BsInstagram,BsGithub} from 'react-icons/bs'

function Home() {
    return (  
        <div>
        <div className='homebg'>
            <h1 className='text'>Hellow I'm</h1>
            <h1>Laviru Dilshan</h1>
            <h5>Fullstack Developer</h5>
            <a href=""><button className='btn'>Download CV</button></a>
            <a href="#contact"><button className='btn-primary'>Contact Me</button></a>
        </div>
        <div className='icons'>
            <a href="https://www.linkedin.com/in/laviru-dilshan-49524a239" target='_blank'><BsLinkedin /></a>
            <a href="https://twitter.com/LaviruDilshan" target='_blank'><BsTwitter /></a>
            <a href="https://github.com/Laviru-Dilshan" target='_blank'> <BsGithub /></a>
            <a href="https://wa.me/+94701016963" target='_blank'><BsWhatsapp /></a>
            <a href="https://www.facebook.com/LaviruDilshanJR/"target='_blank'><BsFacebook /></a>
            <a href="https://www.instagram.com/lavirudilshan" target='_blank'><BsInstagram /></a>
        </div>
        </div>
    );
}

export default Home;