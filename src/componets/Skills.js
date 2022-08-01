import React from 'react';
import {FaReact,FaNode,FaJsSquare,FaPhp,FaHtml5,FaCss3Alt,FaBootstrap,FaPython} from 'react-icons/fa';
import {SiMysql,SiMongodb} from 'react-icons/si';

function Skills() {
     return ( 
        <div className='skillsList'>
            <h1 className='title'>Few Skills i Have</h1>
                <FaReact size={200}/>
                <FaNode size={200}/>
                <FaJsSquare size={200}/>
                <FaPhp size={200}/>
                <SiMysql size={200}/>
                <SiMongodb size={200}/>
                <FaHtml5 size={200}/>
                <FaCss3Alt size={200}/>
                <FaBootstrap size={200}/>
                <FaPython size={200}/>
        </div>
     );
}

export default Skills;