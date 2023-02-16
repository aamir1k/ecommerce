import React from "react";
import BreadCrum from "../components/BreadCrum";
import { Meta } from "../components/Meta";

const TermAndConditions = () => {
  return (
    <div>
      <Meta title={"TermAndConditions"} />
      <BreadCrum title="TermAndConditions " />
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

export default TermAndConditions;
