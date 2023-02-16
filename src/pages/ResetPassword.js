import React from "react";
import BreadCrum from "../components/BreadCrum";
import { Meta } from "../components/Meta";
import CustomInput from "../components/CustomInput";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrum title="Reset Password " />
      <div className="login-wrapper py-5  home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Password</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <CustomInput
                    type="password"
                    name="password"
                    placeholder="password"
                  />
                  <CustomInput
                    className="mt-2"
                    type="password"
                    name="password"
                    placeholder=" confirm password"
                  />
                  <div>
                    <div className=" mt-3 d-flex justify-content-center align-items-center gap-15">
                      <button className="button border-0">
                        Reset Password
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

export default ResetPassword;
