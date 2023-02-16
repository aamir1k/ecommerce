import React from "react";
import BreadCrum from "../components/BreadCrum";
import { Meta } from "../components/Meta";

const ShippingPolicy = () => {
  return (
    <div>
      <Meta title={"ShippingPolicy"} />
      <BreadCrum title="ShippingPolicy " />
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

export default ShippingPolicy;
