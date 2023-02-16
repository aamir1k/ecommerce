import React from "react";

import BreadCrum from "../components/BreadCrum";
import { Meta } from "../components/Meta";
import CustomInput from "../components/CustomInput";

const SignUp = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrum title="Sign Up " />
      <div className="login-wrapper py-5  home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Sign Up</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <CustomInput
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                  />
                  <CustomInput
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                  />
                  <CustomInput type="email" name="email" placeholder="email" />
                  <CustomInput type="tel" name="mobile" placeholder="Mobile" />
                  <CustomInput
                    type="password"
                    name="password"
                    placeholder="password"
                  />

                  <div>
                    <div className=" mt-3 d-flex justify-content-center align-items-center gap-15">
                      <button className="button border-0" type="submit">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
