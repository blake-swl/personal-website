import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import '../Modal/modal.scss';

export default class Launcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <button type="button" className="modalButton" onClick={() => this.handleToggleModal()}>
          Open Modal
        </button>

        {showModal &&
          <Modal onCloseRequest={() => this.handleToggleModal()}>
            {/* <img src="" alt=""/> */}
          </Modal>}
      </div>
    )
  }
}