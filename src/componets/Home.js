import React from 'react';
import img from '../img/moon.jpg'
import '../css/home.css'

function Home() {
    return (  
        <div className='homebg'>
            <img src={img} className='moon' alt="moon img"/>
            <h1 className='text'>Hellow World;</h1>
        </div>
    );
}

export default Home;