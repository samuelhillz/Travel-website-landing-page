import React from 'react'
import './Footer.css';
import {BsFacebook, BsInstagram, BsSearch, BsTwitter} from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className="ft-wrap">
      <div name="name" className="footer">
        <div className="container">
          <div className="top">
            <h3>HILLARY.</h3>
            <div className="socials">
              <BsFacebook size={25} className="icon" />
              <BsTwitter size={25} className="icon" />
              <BsInstagram size={25} className="icon" />
              <AiFillLinkedin size={25} className="icon" />
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <ul>
                <li>About</li>
                <li>Partnership</li>
                <li>Careers</li>
                <li>Newsroom</li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li>Contact</li>
                <li>Terms</li>
                <li>Policy</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright© 2023 All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer