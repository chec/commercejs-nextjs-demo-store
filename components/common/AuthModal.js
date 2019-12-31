import React, { Component } from "react";
import Modal from "./atoms/Modal";

const availableAddresses = [
  "D-16/23-24 FF, Sec-7 Rohini, Delhi - 110085",
  "H.B. Twin Tower, 5th Floor Max Hospital Building, Netaji Subhash Place, Pitam Pura, Delhi, 110034"
];

export default class AuthModal extends Component {
  render() {
    const { isOpen, onClose, onSubmit } = this.props;

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="d-flex justify-content-between align-items-center pb-3">
          <p className="font-size-subheader font-weight-medium">
            Log into your account
          </p>
          <img
            tabIndex="0"
            src="/icon/cross.svg"
            className="w-24 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="pt-4">
          <label className="w-100 mb-3">
            <p className="mb-1 font-size-caption font-color-light">Email Id</p>
            <input className="rounded-0 w-100" />
          </label>
          <label className="w-100 mb-5">
            <p className="mb-1 font-size-caption font-color-light">Password</p>
            <input className="rounded-0 w-100" />
            <a
              href="#"
              className="font-color-black text-decoration-underline mt-3 d-block font-size-caption"
            >
              Forgot Password?
            </a>
          </label>
          <button
            type="submit"
            className="bg-black font-color-white w-100 border-none h-56 font-weight-semibold"
            onClick={onSubmit}
          >
            Login
          </button>
          <a
            href="#"
            className="font-color-light text-center d-block mt-3 font-size-caption"
          >
            Dont have an Account?{" "}
            <span className="font-color-black text-decoration-underline">
              Register now
            </span>
          </a>
        </div>
      </Modal>
    );
  }
}
