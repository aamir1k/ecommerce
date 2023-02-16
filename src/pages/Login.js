import React from "react";
import { Link } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import { Meta } from "../components/Meta";
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrum title="Login " />
      <div className="login-wrapper py-5  home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="email" />
                <CustomInput
                  className="mt-1"
                  type="password"
                  name="password"
                  placeholder="password"
                />
                <div>
                  <Link to="/forgot-password">Forgot Password</Link>
                  <div className=" mt-3 d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0">Login</button>
                    <Link to="/signup" className="button signup">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
