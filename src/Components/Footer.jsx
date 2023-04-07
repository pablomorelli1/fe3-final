import React from 'react';
import './Footer.css';
import DHLogo from '../images/DH.png';
import FBLogo from '../images/ico-facebook.png';
import IGLogo from '../images/ico-instagram.png';
import TiktokLogo from '../images/ico-tiktok.png';
import WhatsAppLogo from '../images/ico-whatsapp.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div class="footer-content">
        <p>Powered by</p>
        <img src={DHLogo} alt='DH-logo' />
      </div>
      <div className="socialMediaContainer">
        <img className='socialMediaIcon' src={FBLogo} alt="Facebook Logo" />
        <img className='socialMediaIcon' src={IGLogo} alt="Instagram Logo" />
        <img className='socialMediaIcon' src={TiktokLogo} alt="Tiktok Logo" />
        <img className='socialMediaIcon' src={WhatsAppLogo} alt="Whatsapp Logo" />
      </div>
    </footer>
  );
};

export default Footer;