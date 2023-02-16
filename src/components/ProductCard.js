import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";

import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import headphone from "../images/headphone.jpg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="#">
              <img src={wish} alt="imaged" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="watch" />
            <img src={headphone} className="img-fluid" alt="watch" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphone bluk 10 pack multicolored for students
            </h5>
            <ReactStars
              count={5}
              //onChange={ratingChanged}
              value={3}
              //edit={false}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <p className={`discription ${grid === 12 ? "d-block" : "d-none"}`}>
              A watch is a portable timepiece intended to be carried or used by
              a person. It is designed to keep a consistent movement despite the
              motions caused by the person's activities.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="#">
              <img src={wish} alt="imaged" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="watch" />
            <img src={headphone} className="img-fluid" alt="watch" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphone bluk 10 pack multicolored for students
            </h5>
            <ReactStars
              count={5}
              //onChange={ratingChanged}
              value={3}
              //edit={false}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <p className={`discription ${grid === 12 ? "d-block" : "d-none"}`}>
              A watch is a portable timepiece intended to be carried or used by
              a person. It is designed to keep a consistent movement despite the
              motions caused by the person's activities.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
