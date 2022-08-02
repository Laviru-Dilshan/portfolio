import React from 'react';
import  owl_eye from '../img/owlEye.png';
import uptrendy from '../img/uptrendy.png';
import name from '../img/name.png';
import calc from '../img/calc.png';

function Projects() {
    return ( 
        <div>
            <h1 className='title' id='projects'>My Some Projects</h1>
            <div className='project-box'>
                <h2>Owl Eye</h2>
                <img src={owl_eye} alt="Owl-EyeTool" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus in aliquam fugiat iure facere, nisi, sint animi illo, iusto ut eum consectetur quos sapiente. Fugit id possimus minima numquam.</p>
                <a href="https://github.com/Laviru-Dilshan/Owl-Eye">visit it </a>
            </div>
            <div className='project-box'>
                <h2>Uptrendy.lk</h2>
                <img src={uptrendy} alt="uptrendy-image" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus in aliquam fugiat iure facere, nisi, sint animi illo, iusto ut eum consectetur quos sapiente. Fugit id possimus minima numquam.</p>
                <a href="https://uptrendy.lk/">visit it</a>
            </div>
            <div className='project-box'>
                <h2>Unique Name Generator</h2>
                <img src={name} alt="unique-name-generator" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus in aliquam fugiat iure facere, nisi, sint animi illo, iusto ut eum consectetur quos sapiente. Fugit id possimus minima numquam.</p>
                <a href="https://unique-name-generator.web.app/">visit it</a>
            </div>
            <div className='project-box'>
                <h2>Simple Calculator</h2>
                <img src={calc} alt="Simple-Calc" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus in aliquam fugiat iure facere, nisi, sint animi illo, iusto ut eum consectetur quos sapiente. Fugit id possimus minima numquam.</p>
                <a href="https://calc.laviru.ml/">visit it </a>
            </div>
        </div>
     );
}

export default Projects;