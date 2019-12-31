import React from "react";

const AuthorizationBanner = ({
  isAuthorized,
  toggleAuthorization,
  openLoginModal
}) => {
  return (
    <div className="bg-gray100 p-4 d-flex align-items-center justify-content-between mb-5">
      {/* Content */}
      {isAuthorized ? (
        <>
          <p className="font-color-medium">prokshh@gmail.com</p>
          <a
            href="#"
            className="font-color-black text-decoration-underline"
            onClick={() => toggleAuthorization(false)}
          >
            Logout
          </a>
        </>
      ) : (
        <>
          <p className="font-color-medium">
            Already customer ?{" "}
            <a
              href="#"
              className="font-color-black text-decoration-underline"
              onClick={openLoginModal}
            >
              Click here to login
            </a>
          </p>
        </>
      )}
    </div>
  );
};

export default AuthorizationBanner;
