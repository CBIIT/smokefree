import React, { Component } from 'react';
import './Form.css';
import {Row, Col} from 'react-bootstrap/lib';
import jQuery from 'jquery';
import queryString from 'query-string';

class PhoneForm extends React.Component {

  


    constructor(props) {
      super(props);
      this.state = {
          value: '', 
          alert: 'Enter your 10-digit phone number without spaces or special characters.',
          unsubscribe:'To unsubscribe text STOP to 47848',
          disabled: true,
          buttonText: 'SIGN UP',
          pass: 0};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

     
    }

    detectmob(){
      if( navigator.userAgent.match(/Android/i)
          || navigator.userAgent.match(/webOS/i)
          || navigator.userAgent.match(/iPhone/i)
          || navigator.userAgent.match(/iPad/i)
          || navigator.userAgent.match(/iPod/i)
          || navigator.userAgent.match(/BlackBerry/i)
          || navigator.userAgent.match(/Windows Phone/i)
        ){
      return true;
      }
      else {
      return false;
      }
    }





    handleValidation(value){

       if(value.match(/(^|\D)\d{10}($|\D)/) && value.match(/(^[0-9]*$)/)){
            this.state.disabled = false;
            this.state.alert ="";
            return true;
       }else if(!value.match(/(^[0-9]*$)/)){
        this.state.alert = "Phone number should only contain digits.";
        this.state.disabled = true;
        return false;
       }else if(!value.match(/(^|\D)\d{10}($|\D)/)){
        this.state.alert = "Phone number should have 10 digits.";
        this.state.disabled = true;
        return false;
       }else{
        this.state.alert = "Phone number should have 10 digits and only contains digits.";
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
      if (this.handleValidation(this.state.value)) {
          const values = queryString.parse(window.location.search);
         
          const myPost = {
              opt_in_path: 'OPC1649949208EB0A076B001A6F7278369',
              person_phone: this.state.value,
              //person_CDC_Promo: values.utm_source
          }
          if(values.utm_source){
            myPost.person_CDC_Promo = values.utm_source
          }
          console.log(myPost);
 
          var request = jQuery.ajax({
              url: 'https://secure.mcommons.com/profiles/join',
              type: "POST",
              data: myPost,
              dataType: "html"
          }).done(
            ({data}) => {
              this.setState({
                pass: 1,
                alert: "Success! You should receive a message on your phone shortly.",
                value:''
               
              })
            }
             

          ).fail(function(jqXHR, textStatus) {
             // failed
             ({data}) => {
              this.setState({
                alert: "Something went wrong. Try again later.",
              })
            }
          });
      }

      else{
        event.preventDefault();
      }
    }

   
  
    render() {
      return (
        <div className="txtInput">
        <Row className={`txtInputRow ${this.state.pass? 'pass' : 'unpass'}`}>
          <Col xs={12} md={8}>
          <label class="sr-only" for="phone-number">Phone Number</label>
          <input type="text" className="txtInput" id="phone-number" placeholder="Phone Number" value={this.state.value} onChange={this.handleChange}></input>
        
          </Col>
          <Col xs={12} md={4}>
          <button disabled={this.state.disabled} onClick={this.handleSubmit} ontouchend={this.handleSubmit} type="submit" className={`button submit ${this.detectmob()? '' : 'nomobile'}`}> <span className="buttonText">{this.state.buttonText}</span></button>
          </Col>
          <Col xs={12}>
          <p className={`alert ${this.state.pass? 'pass' : 'unpass'}`}>{this.state.alert}</p>
          <p className="unsubscribe">{this.state.unsubscribe}</p>
          </Col>
        </Row>
        <Row >
        <Col xs={12}>
        <div className={`txtSuccessRow ${this.state.pass? 'pass' : 'unpass'}`}>
        Success! You should receive a message on your phone shortly.
        </div>
        </Col>
        
        </Row>
        </div>
      );
    }
  }

  export default PhoneForm;