import React, { Component } from 'react';
import styles from './style.css';
import Typed from 'react-typed';
import axios from 'axios';

export default class Contact extends Component {
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
    console.log(this.state);
  }
  // Note to self: conditionally render Typed when user scrolls to current component
  // phone number, linkedin and git will be hovers with links/numbers as afters

  render() {
    return(
      <div className={styles.container}>
        <div className={styles.banner}>
          <Typed className={styles.chat} strings={["^1000 LET'S HAVE A CHAT."]}
          typeSpeed={80}/>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.heading}>Contact Info</div>
              <div className={styles.leftSub}>
                <span className={styles.phone}>Phone</span>
                <span className={styles.number}>(323) 482-0091</span>
              </div>
            <div className={styles.mailbox}>
              <form onSubmit={e => this.handleSend(e)}>
                <textarea 
                  className={styles.name} 
                  placeholder="Name"
                  onChange={this.onChange}>
                </textarea>
                <textarea 
                  className={styles.email}
                  placeholder="Email"
                  onChange={this.onChange}>
                </textarea>
                <textarea 
                  className={styles.text} 
                  placeholder="Write your message here" 
                  onChange={this.onChange}>
                </textarea>
                <button className={styles.send} type="sumbit">Send</button>
              </form>
            </div>
          </div>
          <div className={styles.right}>
            address
          </div>
        </div>
      </div>
    )
  }
};