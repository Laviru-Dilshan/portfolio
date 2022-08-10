import React from 'react';
import  owl_eye from '../img/owlEye.png';
import uptrendy from '../img/uptrendy.png';
import name from '../img/name.png';
import calc from '../img/calc.png';

function Projects() {
    return ( 
        <div>
            <h1 className='title' id='projects'>My Some Projects</h1>
            <div className='box'>
                <div className='project-box'>
                    <h2>Owl Eye</h2>
                    <img src={owl_eye} alt="Owl-EyeTool" />
                    <p>Owl-Eye is a free and open-source tool available on GitHub. Owl-Eye is used to find the information’s about the IP address of the domain or the website. Owl-Eye is used by security researchers in the early phases of reconnaissance and penetration testing of networks. </p>
                    <a href="https://www.geeksforgeeks.org/owl-eye-tool-for-information-gathering-for-domain-name-or-ip-address/">visit it </a>
                </div>
                <div className='project-box'>
                    <h2>Uptrendy.lk</h2>
                    <img src={uptrendy} alt="uptrendy-image" />
                    <p>uptrendy.lk is sri lankan number one fashion store. you can buy your dream fashions and costumes in here. it's create by using wordpress cms and e-commerce pluggin. you can visit it, click visit it button</p>
                    <a href="https://uptrendy.lk/" target="_blank">visit it</a>
                </div>
                <div className='project-box'>
                    <h2>Unique Name Generator</h2>
                    <img src={name} alt="unique-name-generator" />
                    <p>Unique name generator is world number one name generator website. it is powered by ai technology and you can get unique and strong names putting your keywords. visit it and generate awesome names for your dream buissnes.</p>
                    <a href="https://unique-name-generator.web.app/" target="_blank">visit it</a>
                </div>
                <div className='project-box'>
                    <h2>Simple Calculator</h2>
                    <img src={calc} alt="Simple-Calc" />
                    <p>Simple calculator is my beginner calculator project. it can get addition, multiplication, division, distance from two or multiple numbers. It create by using Html, css and java script.you can visit it live demo, click visit it button</p>
                    <a href="https://calc.laviru.ml/" target="_blank">visit it </a>
                </div>
            </div>
        </div>
     );
}

export default Projects;