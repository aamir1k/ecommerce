import React from "react";
import BreadCrum from "../components/BreadCrum";
import { Meta } from "../components/Meta";

const RefundPolicy = () => {
  return (
    <div>
      <Meta title={"RefundPolicy"} />
      <BreadCrum title="RefundPolicy " />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
