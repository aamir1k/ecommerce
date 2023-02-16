import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    // <div className="col-3">
    <div className="blog-card">
      <div className="card-image">
        <img
          src="images/blog-1.jpg"
          className="img-fluid w-100"
          alt="blog_image"
        />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec, 2023</p>
        <h5 className="title">A beautiful sunday morning renaissence </h5>
        <p className="desc">
          lorem esdhw hdjhew hduke jkhdkw jhwei hilfek lijw hewf ihioewd he iew
          jhe ejheukw jkhew kjhew kuhyewk liuoei kioew kiuweo lijoew liuoi
          lwoipwn wlo e 2 28
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
    //</div>
  );
};

export default BlogCard;
