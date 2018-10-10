import React, { Component } from 'react';
import Modal from 'react-modal';
import './EmailModal.scss';

// Icons
import { Icon } from 'react-icons-kit';
import {send} from 'react-icons-kit/fa/send';
import {close} from 'react-icons-kit/fa/close';




Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '20%',
    height: '50vh',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '3%',
  }
};

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
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChange = this.onChange.bind(this);
  };

  openModal() {
    this.setState({ modalIsOpen: true });
  };

  // afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = 'black';
  // };
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
          style={customStyles}
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