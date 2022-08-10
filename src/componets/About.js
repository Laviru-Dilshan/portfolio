import React from 'react';
import profile from '../img/profile.png'
import '../css/about.css'

const Container = () => (
    <div>
    <img src={profile} className="profile" alt="profile" />
    <h1 className='about_me' id='about'>
        About Me,
    </h1>
    <p className='about_p'>
        Hellow I'm Laviru Dilshan. I am Fullstack developer and cyber security student. i can build your dream projects are awesom and secure. i'am update with new technology day by day. you can rate me in sociel media and continue with me. if you want to contact me? Go to Contact me section and send me a message.
    </p>
    </div>
);

export default Container;