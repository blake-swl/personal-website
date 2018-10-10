import React, { Component } from 'react';
import Modal from 'react-modal';
import './EmailModal.scss';

// Icons
import { Icon } from 'react-icons-kit';
import {send} from 'react-icons-kit/fa/send';
import {close} from 'react-icons-kit/fa/close';


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
  };

  openModal() {
    this.setState({ modalIsOpen: true });
  };

  onChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <div id="modal">
        <div onClick={this.openModal}>{this.props.open}</div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Modal"
          className="EmailModal"
          overlayClassName="EmailOverlay"
        >
          <form className="mailbox">
            <div className="icon-action">
              <div className="close" onClick={this.closeModal} alt="close"><Icon icon={close} size={20}/></div>
              <div className="send"><Icon icon={send} size={20} /></div>
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