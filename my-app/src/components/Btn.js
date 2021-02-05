import React from "react";
import { Component } from "react";
import Modal from "../pages/Modal";

class Btn extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <button onClick={this.openModal}>
          <img src="https://www.gigabyte.com/FileUpload/Global/MicroSite/512/images/download-black.png" />
        </button>
        <Modal isOpen={this.state.isModalOpen} close={this.closeModal} />
      </>
    );
  }
}
export default Btn;
