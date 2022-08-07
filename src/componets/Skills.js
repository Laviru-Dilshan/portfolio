import React from 'react';
import {FaReact,FaNode,FaJsSquare,FaPhp,FaHtml5,FaCss3Alt,FaBootstrap,FaPython,FaWordpress} from 'react-icons/fa';
import {SiMysql,SiMongodb} from 'react-icons/si';
import {DiGhost} from 'react-icons/di'

function Skills() {
     return ( 
        <div>
            <h1 className='title' id='skills'>Few Skills i Have</h1>
                <ul className='skills'>
                    <li><FaReact size={175}/><br />React Js</li>
                    <li><FaNode size={175}/><br />Node Js</li>
                    <li><FaJsSquare size={175}/><br /> Java Script</li>
                    <li><FaPhp size={175}/><br /> PHP </li>
                    <li><SiMysql size={175}/><br /> My Sql</li>
                    <li><SiMongodb size={175}/><br /> Mongo DB </li>
                    <li><FaHtml5 size={175}/><br /> HTMl 5</li>
                    <li><FaCss3Alt size={175}/><br /> CSS</li>
                    <li><FaBootstrap size={175}/><br /> Bootstrap</li>
                    <li><FaPython size={175}/><br /> Python </li>
                    <li><FaWordpress size={175}/><br /> Wordpress </li>
                    <li><DiGhost size={175}/><br /> Ghost </li>
                </ul>
        </div>
     );
}

export default Skills;
