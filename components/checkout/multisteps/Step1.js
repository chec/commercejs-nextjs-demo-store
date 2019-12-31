import React, { Component } from "react";
import Link from "next/link";

import ShippingDetails from "../common/ShippingDetails";
import AuthorizationBanner from "../common/AuthorizationBanner";
import AuthModal from "../../common/AuthModal";

const availableAddresses = [
  "D-16/23-24 FF, Sec-7 Rohini, Delhi - 110085",
  "H.B. Twin Tower, 5th Floor Max Hospital Building, Netaji Subhash Place, Pitam Pura, Delhi, 110034"
];

export default class Step1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthorized: false,
      showLoginModal: false,
      selectedAddress: availableAddresses[0]
    };
  }

  render() {
    const { isAuthorized, selectedAddress, showLoginModal } = this.state;

    return (
      <form>
        {/* Modal */}
        <AuthModal
          isOpen={showLoginModal}
          onClose={() => {
            this.setState({ showLoginModal: false });
          }}
          onSubmit={() => {
            this.setState({ showLoginModal: false, isAuthorized: true });
          }}
        />

        {/* Login */}
        <AuthorizationBanner
          isAuthorized={isAuthorized}
          toggleAuthorization={value => this.setState({ isAuthorized: value })}
          openLoginModal={() => this.setState({ showLoginModal: true })}
        />

        {/* ShippingDetails */}
        <ShippingDetails
          selectedAddress={selectedAddress}
          toggleAddress={value => this.setState({ selectedAddress: value })}
          availableAddresses={availableAddresses}
          isAuthorized={isAuthorized}
        />

        <Link href="/checkout/2">
          <button
            type="submit"
            className="bg-black font-color-white w-100 border-none h-56 font-weight-semibold"
          >
            Confirm Details
          </button>
        </Link>
      </form>
    );
  }
}
