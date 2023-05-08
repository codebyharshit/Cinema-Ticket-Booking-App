import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-4 py-3">
      {/* <div className="container text-center me-5">
        <img
          src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/brand-type-film-footer-min-600.png"
          alt="cgvfooter"
        />
      </div> */}
      <div className="footer-cgv-address text-center mt-3">
        <div className="cgv-address-content">
          <div className="text-cgv-address">
            <h5>Explore the Real Theatre Culture with Us!</h5>
            <p className="mb-0">
              Fortune Square:&nbsp;Time Hall, Mumbai, 226566
            </p>
            <p className="mb-0">Maharastra, India</p>
            <p className="mb-0">COPYRIGHT 2023 L&V Studios. All RIGHTS RESERVED .</p>
            <div className="d-flex justify-content-center mt-2">
              {/* <div className="logo-footer-cgv"></div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
