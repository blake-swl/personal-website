import React, { Component } from 'react';
import Modal from 'react-modal';
import './modal.scss';

// Icons
import { Icon } from 'react-icons-kit';
import {close} from 'react-icons-kit/fa/close';


Modal.setAppElement('#root');

export default class ModalComponent extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      component: '',
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  };

  openModal() {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal() {
    this.subtitle.style.color = 'black';
  };

  closeModal() {
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <div id="modal">
        <div className="icons">
          <div className="tooltip" onClick={this.openModal}>
            <span className="tooltiptext">View Demo</span>
            {this.props.buttons}
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Modal"
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="close tooltip" onClick={this.closeModal} style={{color: 'grey'}}>
            <span className="tooltiptext">Close</span>
            <Icon icon={close} size={20}/>
          </div>          
          <img src={this.props.images}/>
          <div className="components">{this.props.components}</div>
          <h2 className="subtitle" ref={subtitle => this.subtitle = subtitle}>{this.props.subtitle}</h2>
        </Modal>
      </div>
    );
  }
};