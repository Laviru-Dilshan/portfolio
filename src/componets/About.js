import React from 'react';
import about from '../img/about.jpg';
import profile from '../img/profile.png'
import '../css/about.css'

const Container = () => (
    <div>
    <h1 className='welcome'>
        console.log("Hellow World..!")
    </h1>
    <img src={profile} className="profile" alt="profile" />
    <h1 className='about_me'>
        About Me,
    </h1>
    <p className='about_p'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    </div>
);

export default Container;