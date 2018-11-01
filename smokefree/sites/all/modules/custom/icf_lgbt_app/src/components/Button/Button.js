import React, { Component } from 'react';
import './Button.css';

const Button = ({ href, children}) => (
    <a href={href} target="_blank" className="button">
    <div className="button-transition">
      <span className="buttonText">{children}</span>
    </div>
    </a>
  );
  
  export const DefaultButton = ({ text, href }) => (
      <Button href={href}>{text}</Button>
  );