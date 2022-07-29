import React from 'react';
import {BsLinkedin,BsTwitter,BsWhatsapp,BsFacebook,BsInstagram,BsGithub} from 'react-icons/bs';

function Footer() {
    return ( 
        <div>
            <hr />
            <div className='footer_text'>
                <h3>© 2022 Laviru Dilshan All Rights Reserved</h3>
                <div className="footer_icons">
                    <a href="http://"><BsLinkedin /></a>
                    <a href="http://"><BsTwitter /></a>
                    <a href="http://"> <BsGithub /></a>
                    <a href="http://"><BsWhatsapp /></a>
                    <a href="http://"><BsFacebook /></a>
                    <a href="http://"><BsInstagram /></a>
                </div>
            </div>     
        </div>
     );
}

export default Footer;