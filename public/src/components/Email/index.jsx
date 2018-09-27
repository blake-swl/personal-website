import React, { Component } from 'react';
import './email.scss';

export default class Email extends Component {
  constructor() {
    super();

    this.state = {
      message: '',
      name: '',
      email: '',
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={e => this.handleSend(e)} className="mailbox">
          <h1 className="nudes">send nudes</h1>
          <textarea 
            className="name"
            placeholder="Name"
            onChange={this.onChange}>
          </textarea>
          <textarea 
            className="email"
            placeholder="Email"
            onChange={this.onChange}>
          </textarea>
          <textarea 
            className="text"
            placeholder="Write your message here" 
            onChange={this.onChange}>
          </textarea>
          <button className="send" type="sumbit" className="send">Send</button>
        </form>
      </div>
    )
  }
};