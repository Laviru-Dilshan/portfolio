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
            <a href=""><button className='btn-primary'>Contact Me</button></a>
        </div>
        <div className='icons'>
            <a href="http://"><BsLinkedin /></a>
            <a href="http://"><BsTwitter /></a>
            <a href="http://"> <BsGithub /></a>
            <a href="http://"><BsWhatsapp /></a>
            <a href="http://"><BsFacebook /></a>
            <a href="http://"><BsInstagram /></a>
        </div>
        </div>
    );
}

export default Home;