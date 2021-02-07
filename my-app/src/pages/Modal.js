import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

class Modal extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }

  render() {
    return (
      <>
        <section className="modal">
          <div className="modal-head">
            <h2 className="modal-head-title"></h2>
          </div>
          <div className="modal-body">
            <h4 className="modal-body-title"></h4>
            <p className="modal-body-textbox"></p>
            <Link to="/">
              <button className="modal-body-btn"></button>
            </Link>
          </div>
        </section>
      </>
    );
  }
}
export default Modal;
