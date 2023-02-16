import React from "react";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Signup for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address "
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6 ">
                  Hno: 227 Near Shopping Plaza <br /> Barsoo, Awantipora <br />
                  Pincode: 192122
                </address>
                <a
                  href="tel:+91 6006355711"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +91 6006355711
                </a>
                <a
                  href="mailto:aamir1kuchay@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  aamir1kuchay@gmail.com
                </a>
                <div className="socia-icons d-flex align-items-center gap-30 mt-4">
                  <Link to="/">
                    <BsLinkedin className="text-white fs-4" />
                  </Link>
                  <Link to="/">
                    <BsInstagram className="text-white fs-4" />
                  </Link>
                  <Link to="/">
                    <BsGithub className="text-white fs-4" />
                  </Link>
                  <Link to="/">
                    <BsYoutube className="text-white fs-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/refund-policy">
                  Refund Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/shipping-policy">
                  Shipping Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/term-conditions">
                  Terms & conditions
                </Link>
                <Link className="text-white py-2 mb-1" to="/blogs">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/">
                  About Us
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Faq
                </Link>
                <Link className="text-white py-2 mb-1" to="/contact1">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/">
                  Laptops
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Headphones
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Tablets
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Accessories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()}; Powered By Developers
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
