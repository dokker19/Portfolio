import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4></h4>
      <h4></h4>
      <h4></h4>
      <div className='footerLinks'>
        <a href="https://github.com/dokker19" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/dokyung-yang-679a1b19a/" target='_blank'><FaLinkedin/></a>
        <a href="https://leetcode.com/u/dkyang1023/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer