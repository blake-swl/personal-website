import React, { Component } from 'react';
import styles from './style.css';
import Typed from 'react-typed';
import axios from 'axios';

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      message: '',
    }
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({
      message: e.target.value
    })
    console.log(this.state.message);
  }

  render() {
    return(
      <div className={styles.container}>
        <div className={styles.banner}>
          <Typed className={styles.chat} strings={["^1000 LET'S HAVE A CHAT."]}
          typeSpeed={80}/>
        </div>
        <div className={styles.contact}>
          <div className={styles.left}>
            <div className={styles.leftCon}>
              <div className={styles.heading}>Contact Info</div>
              <span className={styles.phone}>Phone</span>
              <span className={styles.number}>(323) 482-0091</span>
              <div className={styles.mailbox}>
                <form onSubmit={e => this.handleSend(e)}>
                  <textarea 
                    className={styles.text} 
                    placeholder="Write your message here" 
                    onChange={e => this.handleInput(e)}>
                  </textarea>
                  <button type="sumbit">Send</button>
                </form>
              </div>
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