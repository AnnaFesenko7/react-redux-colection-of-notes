import s from './Modal.module.css';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector(
  '#modal-root'
);

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener(
      'keydown',
      this.handleKeyDown
    );
  }
  componentWillUnmount() {
    window.removeEventListener(
      'keydown',
      this.handleKeyDown
    );
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div
        className={s.Modal__backdrop}
        onClick={this.onBackdropClick}
      >
        <div className={s.Modal__content}>
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}
