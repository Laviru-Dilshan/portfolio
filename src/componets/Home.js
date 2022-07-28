import React from 'react';
import img from '../img/moon.jpg'
import '../css/home.css'

function Home() {
    return (  
        <div className='homebg'>
            <img src={img} className='moon' alt="moon img"/>
            <h1>Hellow World;</h1>
        </div>
    );
}

export default Home;