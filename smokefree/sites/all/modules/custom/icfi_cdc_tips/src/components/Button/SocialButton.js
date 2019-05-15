import React, { Component } from 'react';
import './Button.css';

const Button = ({ href, children}) => (
    <a href={href} className="button">
    <div className="button-transition">
      <span className="buttonText">{children}</span>
    </div>
    </a>
  );
  
  export const SocialButton = ({ text, href, imgName }) => (
      <Button href={href}><img src={"/sites/all/modules/custom/icfi_cdc_tips/src/assets/" + imgName} className="socialIcon"></img>{text}</Button>
  );