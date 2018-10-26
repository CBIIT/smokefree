import React, { Component } from 'react';
import './Form.css'
import {Row, Col} from 'react-bootstrap/lib';


class PhoneForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '', 
          alert: '',
          unsubscribe:'To unsubscribe text STOP to 47848',
          disabled: true};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

     
    }
    handleValidation(value){

       if(value.match(/(^|\D)\d{10}($|\D)/) && value.match(/(^[0-9]*$)/)){
            this.state.disabled = false;
            this.state.alert ="";
            return true;
       }else if(!value.match(/(^[0-9]*$)/)){
        this.state.alert = "phone number should only contain digits";
        this.state.disabled = true;
        return false;
       }else if(!value.match(/(^|\D)\d{10}($|\D)/)){
        this.state.alert = "phone number should have 10 digits";
        this.state.disabled = true;
        return false;
       }else{
        this.state.alert = "phone number should have 10 digits and only contains digits";
        this.state.disabled = true;
        return false;  
       }

    }
  
    handleChange(event) {
      var message = event.target.value;
      this.setState({value: event.target.value});
      if(!(message =='')){
      this.handleValidation(message);
      }else{
      this.state.alert='';
      }
    }
  
    handleSubmit(event) {

      if (this.handleValidation(this.state.value)){
        alert('Phone was submitted: ' + this.state.value);
      }else{
        event.preventDefault();
      }
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>


        <Row className="txtInputRow">
          <Col xs={12} md={8}>
          <input type="text" className="txtInput" placeholder="Phone Number" value={this.state.value} onChange={this.handleChange}></input>
          </Col>
          <Col xs={12} md={4}>
          <button disabled={this.state.disabled} type="submit" className="button submit"> <span className="buttonText">START NOW</span></button>
          </Col>
          <Col xs={12}>
          <p className="alert">{this.state.alert}</p>
          <p className="unsubscribe">{this.state.unsubscribe}</p>
          </Col>
        </Row>

        </form>
      );
    }
  }

  export default PhoneForm;