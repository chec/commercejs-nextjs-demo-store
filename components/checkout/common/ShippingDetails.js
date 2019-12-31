import React from "react";
import ShippingForm from "./ShippingForm";
import Radiobox from "../../common/atoms/Radiobox";

const ShippingDetail = ({
  isAuthorized,
  availableAddresses,
  toggleAddress,
  selectedAddress
}) => {
  return (
    <>
      <p className="font-size-subheader font-weight-semibold mb-4">
        Shipping Information
      </p>
      {isAuthorized ? (
        <div className="mb-5">
          {availableAddresses.length > 0 ? (
            <>
              {availableAddresses.map((address, index) => (
                <div
                  onClick={() => {
                    toggleAddress(address);
                  }}
                  className="p-3 d-flex align-items-center cursor-pointer border border-color-gray400 mb-2"
                >
                  <Radiobox
                    onClick={() => {
                      toggleAddress(address);
                    }}
                    checked={selectedAddress === address}
                    className="mr-3"
                  />
                  <p className="font-weight-medium">{address}</p>
                </div>
              ))}
              <div
                onClick={() => {
                  toggleAddress(null);
                }}
                className="p-3 d-flex align-items-center cursor-pointer border border-color-gray400 mb-2"
              >
                <Radiobox
                  onClick={() => {
                    toggleAddress(null);
                  }}
                  checked={selectedAddress === null}
                  className="mr-3"
                />
                <p className="font-weight-medium">Add New Address</p>
              </div>
              {selectedAddress === null && (
                <div className="mt-4">
                  <ShippingForm />
                </div>
              )}
            </>
          ) : (
            <ShippingForm />
          )}
        </div>
      ) : (
        <ShippingForm />
      )}
    </>
  );
};

export default ShippingDetail;
