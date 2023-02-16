import React, { useState } from "react";
import axios from "axios";

function Demo() {
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    comments: "hey",
    reviews: "good",
  });
  const [files, setFiles] = useState([]);

  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFiles([...files, ...event.target.files]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append(
      "product",
      new Blob([JSON.stringify(product)], { type: "application/json" })
    );

    files.forEach((image) => {
      formData.append("files", image);
      console.log(image.type, "kkkkkkkkkkkk");
    });
    axios
      .post("http://localhost:8087/product/updateProduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Ocp-Apim-Subscription-Key": " Configuration.EmotionAPI.Key",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("Saved");
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">
      <div>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={product.productName}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={product.description}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <input
        accept="image/*"
        type="file"
        name="files"
        multiple
        onChange={(e) => handleFileChange(e)}
      />
      <button disabled={!product.description} type="submit">
        Submit
      </button>
    </form>
  );
}

export default Demo;
