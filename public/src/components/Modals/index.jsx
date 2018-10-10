import React, { Component } from 'react';
import Modal from 'react-modal';
import './modal.scss';


Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    // background: 'rgba(0,0,0,0.8)',
    // width: '60vw',
    // height: '50vh',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

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
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'black';
  };

  closeModal() {
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <div id="modal">
        <div className="icons">
          <div onClick={this.openModal}>{this.props.buttons}</div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Modal"
          className="Modal"
          overlayClassName="Overlay"
        >
          <button className="close" onClick={this.closeModal}>close</button>
          <img src={this.props.images} style={{width: '40vw', height: 'auto'}}/>
          <div className="components">{this.props.components}</div>
          <h2 className="subtitle" ref={subtitle => this.subtitle = subtitle}>{this.props.subtitle}</h2>

          {/* <div>I am a modal</div>
          {/* <form>
            <input />
            <button className="buts">tab navigation</button>
            <button className="buts">stays</button>
            <button className="buts">inside</button>
            <button className="buts">the modal</button>
          </form> */}
        </Modal>
      </div>
    );
  }
};