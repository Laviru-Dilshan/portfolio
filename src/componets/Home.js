import React from 'react';
import '../css/home.css'

function Home() {
    return (  
        <div className='homebg'>
            <h1 className='text'>Hellow I'm</h1>
            <h1>Laviru Dilshan</h1>
            <h5>Fullstack Developer</h5>
            <a href=""><button className='btn'>Download CV</button></a>
            <a href=""><button className='btn-primary'>Contact Me</button></a>
        </div>
    );
}

export default Home;