import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import '../Modal/_modal'

export default class Modal extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    this.onModalClose = this.onModalClose.bind(this);
  }

  componentDidMount() {

    if (this.props.display) {
      this.modalOpen();
    }

  }

  componentDidUpdate(prevProps, prevState) {

    if (!prevProps.display && this.props.display) {
      this.modalOpen();

    } else if (prevProps.display && !this.props.display) {
      this.modalClose();
    }

  }

  onModalClose(e) {
    e.preventDefault();
    this.props.onModalClose();
  }

  modalOpen() {
    TweenMax.to($("#" + this.props.id), 0.5, { opacity: 1, display: "block", ease: Power2.easeInOut });
  }

  modalClose() {

    var self = this;
    TweenMax.to($("#" + this.props.id), 0.5, {
      display: "none", opacity: 0, ease: Power2.easeInOut, onComplete: function () {

      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  onRemove(e) {
    e.preventDefault();

    var _this = this;

    bootbox.confirm({
      message: this.props.rempoveMessage !== undefined ?
        this.props.rempoveMessage : this.props.deleteRowText ? this.props.deleteRowText : 'Delete row',
      buttons: {
        confirm: {
          label: this.props.yesText ? this.props.yesText : 'yes',
          className: 'btn-primary'
        },
        cancel: {
          label: this.props.noText ? this.props.noText : 'no',
          className: 'btn-default'
        }
      },
      callback: function (result) {
        if (result) {
          _this.props.onRemove();
        }
      }
    });
  }

  render() {

    //define buttons 
    const submitButton = this.props.submitButton !== undefined ? this.props.submitButton : true;
    const cancelButton = this.props.cancelButton !== undefined ? this.props.cancelButton : true;
    const deleteButton = this.props.deleteButton !== undefined ? this.props.deleteButton : true;

    return (
      <div className="custom-modal modal-component" id={this.props.id} style={{ zIndex: this.props.zIndex }}>
        <div className="modal-background"></div>


        <div className={'modal-container ' + this.props.size}>

          <div className="modal-header">

            <i className={this.props.icon}></i>
            <h2>{this.props.title}</h2>

            <div className="modal-buttons">
              <a className="btn btn-default close-button-modal" onClick={this.onModalClose}>
                <i className="fa fa-times"></i>
              </a>
            </div>
          </div>

          <div className="modal-content">
            <div className="container">
              {this.props.children}
            </div>

            <div className="modal-footer">
              {deleteButton &&
                <a href="" className="btn btn-link text-danger" onClick={this.onRemove.bind(this)}>
                  <i className="fas fa-trash-alt"></i> &nbsp; {this.props.deleteText ? this.props.deleteText : 'Delete'}
                </a>
              }
              &nbsp;
              {cancelButton &&
                <a href="" className="btn btn-default" onClick={this.onModalClose}>
                  {this.props.cancelText ? this.props.cancelText : 'Cancel'}
                </a>
              }
              &nbsp;
                  {submitButton &&
                <a href="" className="btn btn-primary" onClick={this.onSubmit.bind(this)}>
                  {this.props.saveText ? this.props.saveText : 'Save'}
                </a>
              }
              &nbsp;
                </div>

          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  display: PropTypes.bool.isRequired,
  zIndex: PropTypes.number.isRequired,

  deleteText: PropTypes.string,
  cancelText: PropTypes.string,
  saveText: PropTypes.string,
  deleteRowText: PropTypes.string,
  yesText: PropTypes.string,
  noText: PropTypes.string,

  submitButton: PropTypes.bool,
  cancelButton: PropTypes.bool,
  deleteButton: PropTypes.bool,

  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  onRemove: PropTypes.func

};

