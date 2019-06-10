import React, { Component } from 'react';
import './Button.css';

const Button = ({ href, children}) => (
    <a href={href} className="button">
    <div className="button-transition">
      <span className="buttonText">{children}</span>
    </div>
    </a>
  );
  
  export const SocialButton = ({ text, href, imgName, textClass }) => (
      <Button href={href}><img src={"sites/all/modules/custom/icfi_campaign_landing_page/invet-dev/src/assets/" + imgName} className="socialIcon"></img><span className={textClass}>{text}</span></Button>
  );