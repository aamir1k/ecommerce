import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrum from "../components/BreadCrum";
import { Meta } from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };
  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrum title="Product Name " />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://media.gettyimages.com/id/171585756/photo/watch.jpg?s=612x612&w=gi&k=20&c=qi-r_7yb8gASpCyC9U63Nc-e-YMlvKA5fMupLCWTD9s="
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/29/13/39/analog-watch-1869928__340.jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1065329058/photo/premium-mens-watch-on-hand-close-up.jpg?s=612x612&w=0&k=20&c=VdpUac8ObrDZZ0I8OCD_vOxPqyOUCa3cM8zoqXsPkuE="
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div>
                  <img
                    src="https://media.istockphoto.com/id/171585394/photo/watch.jpg?s=612x612&w=0&k=20&c=K5_GEFlQx-q6h8jMwQXhf9zJNNAbgCg7uxmm7MxvGjA="
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">The most beautiful Mens watch</h3>
                </div>
                <div className=" py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      value={3}
                      size={24}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <p className="t-review mb-0">(2 reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data">Titam</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data">Menz </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2 ">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2 ">
                    <h3 className="product-heading">Availability :</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3 ">
                    <h3 className="product-heading">Size :</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-whit text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-whit text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-whit text-dark border-secondary">
                        XL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color :</h3>
                    <Color />
                  </div>
                  <div className="d-flex gap-15 flex-row mt-2 mb-3 align-items-center ">
                    <h3 className="product-heading">Quantity :</h3>
                    <div className="">
                      <input
                        type="number"
                        min={1}
                        max={10}
                        style={{ width: "70px" }}
                        className="form-control"
                      ></input>
                    </div>

                    <div className=" d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0">Add to Cart</button>
                      <button to="/signup" className="button signup">
                        Buy Now
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="/">
                        <AiOutlineHeart className="fs-5 me-2" />
                        Add to wishlist
                      </a>
                    </div>
                    <div>
                      <a href="/">
                        <TbGitCompare className="fs-5 me-2" />
                        Add to compare
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Shipping And Returns :</h3>
                    <p className="product-data">
                      Free Shipping and returns available in all orders
                      <br /> we ship all orders in <b>5 - 10 business days</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Product link :</h3>
                    <a
                      href="javascript:void(0);"
                      onClick={(e) => {
                        copyToClipboard(
                          "https://media.gettyimages.com/id/171585756/photo/watch.jpg?s=612x612&w=gi&k=20&c=qi-r_7yb8gASpCyC9U63Nc-e-YMlvKA5fMupLCWTD9s="
                        );
                      }}
                    >
                      Copy product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>

              <div className="bg-white p-3 ">
                <p>
                  loremspam jbe djnewjd jndekwd ndkwed lwende ijwed jfn34 i34
                  3jeckndwie ji djwebdjew iejdiew kijwded ijwe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="review" className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10 ">
                      <ReactStars
                        count={5}
                        value={3}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div className="d-flex align-items-end ">
                      <a
                        href="@"
                        className="text-dark text-decoration-underline "
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        value={3}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
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
                    <div className="d-flex justify-content-end">
                      <button type="submit" className="button border-0">
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Aamir</h6>
                      <ReactStars
                        count={5}
                        value={3}
                        size={24}
                        edit={false}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      this is not a good product to use. it gets deteraetdd
                      after frequent use
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
