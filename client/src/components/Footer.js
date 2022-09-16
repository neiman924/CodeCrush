import React from "react";

export default function Footer() {
  let year = (new Date().getFullYear())
  return (
    <div>
      {/* <!-- page footer  --> */}
      <div className="container-fluid bg-dark text-light has-height-md middle-items border-top text-center wow fadeIn">
        <div className="row">
          <div className="col-sm-4">
            <h3>EMAIL US</h3>
            <p className="text-muted">info@website.com</p>
          </div>
          <div className="col-sm-4">
            <h3>CALL US</h3>
            <p className="text-muted">(123) 456-7890</p>
          </div>
          <div className="col-sm-4">
            <h3>FIND US</h3>
            <p className="text-muted">12345 Fake ST NoWhere AB Country</p>
          </div>
        </div>
      </div>
      <div className="bg-dark text-light text-center border-top wow fadeIn">
        <p className="mb-0 py-3 text-muted small">&copy; Copyright {year} Made with <i className="ti-heart text-danger"></i> By Kelton,Ben,Furhan,Sheryl and Jason</p>
      </div>
      {/* <!-- end of page footer --> */}
    </div>
  );
}
