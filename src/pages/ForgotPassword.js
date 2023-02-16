import React from "react";
import { Meta } from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrum title="Forgot Password " />
      <div className="login-wrapper py-5  home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <p className=" send text-center mt-2 mb-3">
                  We will send you an email to reset your password
                </p>
                <form action="" className="d-flex flex-column gap-15">
                  <CustomInput type="email" name="email" placeholder="email" />

                  <div>
                    <div className=" mt-3 d-flex justify-content-center flex-column align-items-center gap-15">
                      <button className="button border-0" type="submit">
                        Submit
                      </button>
                      <Link to="/login">cancle</Link>
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

export default ForgotPassword;
