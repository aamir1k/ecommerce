import React from "react";
import BreadCrum from "../components/BreadCrum";
import { Meta } from "../components/Meta";
import { AiOutlineHome, AiOutlineMail, AiFillInfoCircle } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrum title="Contact Us " />
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13238.376639169082!2d74.98224702526242!3d33.95156488957664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e2202e1c578bdb%3A0x6d634fe863e7d115!2sBarsoo%20192122!5e0!3m2!1sen!2sin!4v1676095783495!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div className="col-6">
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        id=""
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                        className="w-100 form-control"
                      />
                    </div>
                    <div>
                      <button type="submit" className="button border-0">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-6">
                  <h3 className="contact-title mb-4">Get in Touch with Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          Hno:23, Near village Barsoo, Jammu And Kashmir
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FiPhoneCall className="fs-5" />
                        <a href="tel:+91 6006355711">+91 6006355711</a>
                      </li>

                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:xyz@gmail.com">xyz@gmail.com</a>
                      </li>

                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiFillInfoCircle className="fs-5" />
                        <p className="mb-0">Monday - friday 6 AM to 12 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
