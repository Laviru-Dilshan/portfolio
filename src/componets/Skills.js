import React from 'react';
import {FaReact,FaNode,FaJsSquare,FaPhp,FaHtml5,FaCss3Alt,FaBootstrap,FaPython} from 'react-icons/fa';
import {SiMysql,SiMongodb} from 'react-icons/si';

function Skills() {
     return ( 
        <div>
            <h1 className='title'>Few Skills i Have</h1>
            <ul className="skillsList">
                <li className='li-item'><div className='anim-icon'><FaReact size={200}/></div><br />React Js</li>
                <li className='li-item'><div className='anim-icon'><FaNode size={200}/></div><br />Node Js</li>
                <li className='li-item'><div className='anim-icon'><FaJsSquare size={200}/></div><br />Java Script</li>
                <li className='li-item'><div className='anim-icon'><FaPhp size={200}/></div><br />PHP</li>
                <li className='li-item'><div className='anim-icon'><SiMysql size={200}/></div><br />My Sql</li>
                <li className='li-item'><div className='anim-icon'><SiMongodb size={200}/></div><br />Mongo DB</li>
                <li className='li-item'><div className='anim-icon'><FaHtml5 size={200}/></div><br />Html</li>
                <li className='li-item'><div className='anim-icon'><FaCss3Alt size={200}/></div><br />Css</li>
                <li className='li-item'><div className='anim-icon'><FaBootstrap size={200}/></div><br />Bootstrap</li>
                <li className='li-item'><div className='anim-icon'><FaPython size={200}/></div><br />Python</li>

            
            </ul>
        </div>
     );
}

export default Skills;