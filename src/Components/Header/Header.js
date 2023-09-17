import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-section">
      <div className=" d-lg-none">
        <div className="d-flex align-items-center justify-content-between px-4 py-3">
          <div>
            <i className="fa-solid fa-arrow-left fs-4 text-white"></i>
          </div>
          <div>
            <button
              className="btn text-white border border-white"
              data-bs-toggle="modal"
              data-bs-target="#signUpModal"
            >
              Join Group
            </button>
          </div>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-center  container position-absolute top-50 mw-100 ">
        <div className="container  text-white header-info my-5 py-5 ">
          <h2 className="fw-bold fs-1">Computer Engineering</h2>
          <p className="fw-normal fs-5">
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
