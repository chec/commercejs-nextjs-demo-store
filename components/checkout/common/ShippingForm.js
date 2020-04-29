import React, { Component } from "react";
import PropTypes from 'prop-types';
import Checkbox from "../../common/atoms/Checkbox";
import Dropdown from "../../common/atoms/Dropdown";

export default class ShippingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recieveNewsletter: true,
      saveInfo: true
    };
  }

  toggleNewsletter = value => {
    this.setState({ recieveNewsletter: value });
  };

  toggleSaveInfo = value => {
    this.setState({ saveInfo: value });
  };

  render() {
    const { recieveNewsletter, saveInfo } = this.state;

    return (
      <>
        <div className="row">
          <div className="col-12 col-sm-4 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                First Name*
              </p>
              <input className="rounded-0 w-100" />
            </label>
          </div>
          <div className="col-12 col-sm-4 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Middle Name (optional)
              </p>
              <input className="rounded-0 w-100" />
            </label>
          </div>
          <div className="col-12 col-sm-4 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Last Name*
              </p>
              <input className="rounded-0 w-100" />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Country*
              </p>
              {/* <input
                className="rounded-0 w-100"
                placeholder="Select a country"
              /> */}
              <Dropdown
                menu={[
                  "India",
                  "China",
                  "Nepal",
                  "Bhutan",
                  "SriLanka",
                  "Myanmar",
                  "Indonatia"
                ]}
              >
                Select a country
              </Dropdown>
            </label>
          </div>
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">City*</p>
              <input className="rounded-0 w-100" />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Address Line 1*
              </p>
              <input
                className="rounded-0 w-100"
                placeholder="House number, steet, etc."
              />
            </label>
          </div>
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Address Line 2 (optional)
              </p>
              <input
                className="rounded-0 w-100"
                placeholder="Appartment, buero, etc."
              />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Region / Department*
              </p>
              <input
                className="rounded-0 w-100"
                placeholder="Select a region"
              />
            </label>
          </div>
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Postal Code*
              </p>
              <input className="rounded-0 w-100" />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Telephone*
              </p>
              <input className="rounded-0 w-100" />
            </label>
          </div>
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Email Address*
              </p>
              <input className="rounded-0 w-100" />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Shipping method*
              </p>
              {/* <input
                className="rounded-0 w-100"
                placeholder="Select a country"
              /> */}
              <Dropdown
                menu={[
                  "India",
                  "China",
                  "Nepal",
                  "Bhutan",
                  "SriLanka",
                  "Myanmar",
                  "Indonatia"
                ]}
              >
                Select a country
              </Dropdown>
            </label>
          </div>
        </div>
        <div
          onClick={() => this.toggleNewsletter(!recieveNewsletter)}
          className="d-flex mb-4 flex-nowrap cursor-pointer"
        >
          <Checkbox
            onClick={() => this.toggleNewsletter(!recieveNewsletter)}
            checked={recieveNewsletter}
            className="mr-3"
          />
          <p>
            Receive our news, restocking, good plans and news in your mailbox!
            Rest assured, you will not be flooded, we only send one newsletter
            per month approximately 🙂
          </p>
        </div>
        <div
          onClick={() => this.toggleSaveInfo(!saveInfo)}
          className="d-flex mb-4 flex-nowrap cursor-pointer"
        >
          <Checkbox
            onClick={() => this.toggleSaveInfo(!saveInfo)}
            checked={saveInfo}
            className="mr-3"
          />
          <p className="align-self-center">
            Save the information for next time
          </p>
        </div>
        <label className="w-100 mb-5">
          <p className="mb-1 font-size-caption font-color-light">
            Order Notes (optional)
          </p>
          <textarea className="rounded-0 w-100" />
        </label>

        {/* <button
          type="submit"
          className="bg-black font-color-white w-100 border-none h-56 font-weight-semibold"
        >
          Make Payment
        </button> */}
      </>
    );
  }
}

ShippingForm.propTypes = {
  shippingOptions: [],
}
