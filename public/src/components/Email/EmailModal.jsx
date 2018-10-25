import React, { Component } from 'react';
import Modal from 'react-modal';
import './EmailModal.scss';
import axios from 'axios';

// Icons
import { Icon } from 'react-icons-kit';
import {close} from 'react-icons-kit/fa/close';
import {send} from 'react-icons-kit/fa/send';


Modal.setAppElement('#root');

export default class EmailModal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      message: '',
      name: '',
      email: '',
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  openModal() {
    this.setState({ modalIsOpen: true });
  };
  closeModal() {
    this.setState({ modalIsOpen: false });
  };
  onChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
<<<<<<< HEAD
<<<<<<< HEAD
  }
  async handleSubmit() {

    const payload = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }
    console.log(payload, 'this is payload')
    const data = await axios.post(`/api/sendEmail`, payload);
    alert('message sent!')
=======
    console.log(e.target.value)
  }
  async handleSubmit() {
    // const data = await $.post(`/api/email`, {message: this.state.title, body: this.state.body});
>>>>>>> parent of 0e3f36b... [fix] - smtp route
=======
    console.log(e.target.value)
  }
  async handleSubmit() {
    // const data = await $.post(`/api/email`, {message: this.state.title, body: this.state.body});
>>>>>>> parent of 0e3f36b... [fix] - smtp route
  }

  render() {
    return (
      <div id="modal">
        <div className="writeMail tooltip" onClick={this.openModal}>
          <span className="tooltiptext">Compose</span>
          {this.props.open}
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Modal"
          className="EmailModal"
          overlayClassName="EmailOverlay"
        >
          <form className="mailbox" >
            <div className="icon-action">
              <div className="close tooltip" onClick={this.closeModal} alt="close">
                <span className="tooltiptext" >Close</span>
                <Icon icon={close} size={20}/>
              </div>
              <div className="send tooltip">
                <span className="tooltiptext">Send</span>
                <Icon icon={send} size={20} onClick={this.handleSubmit}/>
              </div>
            </div>
            <textarea 
              className="names"
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
          </form>
        </Modal>
      </div>
    );
  }
};