import React, { Component } from 'react';
import './Button.css';

const Button = ({ href, children}) => (
    <a href={href} target="_blank" className="button">
      <span className="buttonText">{children}</span>
    </a>
  );
  
  export const DefaultButton = ({ text, href }) => (
      <Button href={href}>{text}</Button>
  );