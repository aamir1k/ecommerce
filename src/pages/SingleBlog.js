import React from "react";
import { Link } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import { Meta } from "../components/Meta";
import { BiLeftArrowAlt } from "react-icons/bi";
import blog from "../images/blog-1.jpg";

const SingleBlog = () => {
  return (
    <div>
      <Meta title={"Dynamic Blog"} />
      <BreadCrum title="Dynamic Blog " />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <BiLeftArrowAlt className="fs-4" />
                  Go back to blogs
                </Link>
                <h3 className="title">A beautiful sundau Morning Resinance</h3>
                <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
                <p>
                  Find out which posts are a hit with Blogger’s built-in
                  analytics. You’ll see where your audience is coming from and
                  what they’re interested in. You can even connect your blog
                  directly to Google Analytics for a more detailed look.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
