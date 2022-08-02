import React from 'react';
import {FaReact,FaNode,FaJsSquare,FaPhp,FaHtml5,FaCss3Alt,FaBootstrap,FaPython} from 'react-icons/fa';
import {SiMysql,SiMongodb} from 'react-icons/si';

function Skills() {
     return ( 
        <div>
            <h1 className='title'>Few Skills i Have</h1>
            <div className="skillsList">
                <FaReact size={175}/>
                <FaNode size={175}/>
                <FaJsSquare size={175}/>
                <FaPhp size={175}/>
                <SiMysql size={175}/>
                <SiMongodb size={175}/>
                <FaHtml5 size={175}/>
                <FaCss3Alt size={175}/>
                <FaBootstrap size={175}/>
                <FaPython size={175}/>
            </div>
        </div>
     );
}

export default Skills;
