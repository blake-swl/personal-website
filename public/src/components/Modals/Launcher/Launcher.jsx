import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from '../Modal/style'; // Import styles
import Modal from '../Modal/Modal'; // Import SimpleModal component

// Declaration of the component as React Class Component
class Launcher extends Component {
  
  // Init of the component before it is mounted.
  // Sets the modal visibility (showModal) to false.
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  
  // Handle the visibility of the modal.
  // If `state.showModal` is false, sets it to true,
  // if is true, sets it to false.
  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { buttonLabel, children  } = this.props;
    const { showModal } = this.state;

    return (
      <div>
        <button
          type="button"
          className="modalButton"
          onClick={() => this.handleToggleModal()}
        >
          {buttonLabel}
        </button>

        {showModal &&
          <Modal onCloseRequest={() => this.handleToggleModal()}>
           {children}
          </Modal>}
      </div>
    );
  }
}

export default injectSheet(styles)(Launcher);