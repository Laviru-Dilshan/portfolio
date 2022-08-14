import React from 'react';
import {BsLinkedin,BsTwitter,BsWhatsapp,BsFacebook,BsInstagram,BsGithub} from 'react-icons/bs';

function Footer() {
    return ( 
        <div>
            <hr />
            <div className='footer_text'>
                <h3 className='footer_line'>© 2022 Laviru Dilshan All Rights Reserved</h3>
                <div className="footer_icons">
                    <a href="https://www.linkedin.com/in/laviru-dilshan-49524a239" target='_blank'><BsLinkedin /></a>
                    <a href="https://twitter.com/LaviruDilshan" target='_blank'><BsTwitter /></a>
                    <a href="https://github.com/Laviru-Dilshan" target='_blank'> <BsGithub /></a>
                    <a href="https://wa.me/+94701016963" target='_blank'><BsWhatsapp /></a>
                    <a href="https://www.facebook.com/LaviruDilshanJR/" target='_blank'><BsFacebook /></a>
                    <a href="https://www.instagram.com/lavirudilshan" target='_blank'><BsInstagram /></a>
                </div>
            </div>     
        </div>
     );
}

export default Footer;