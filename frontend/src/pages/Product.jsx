import { Autocomplete, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductService from "../service/ProductService";

const Product = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: null,
    category: null,
    price: 0.0,
    description: "",
    phoneDetail: "",
    image: null,
  });

  const clearForm = () => {
    setFormData({
      name: "",
      brand: null,
      category: null,
      price: 0.0,
      description: "",
      phoneDetail: "",
      image: null,
    });
  };

  const saveProduct = async () => {
    const form = new FormData();
    form.append("name", formData.name);
    form.append("brand", formData.brand);
    form.append("category", formData.category);
    form.append("price", parseFloat(formData.price));
    form.append("description", formData.description);
    form.append("phoneDetail", formData.phoneDetail);
    if (formData.image) form.append("image", formData.image);

    let res = await ProductService.createProduct(form);
    console.log(res);

    if (res.status === 201) {
      clearForm();
    } else {
      alert("Error");
    }
  };

  const pBrand = ["Apple", "Samsung", "Vivo", "Oppo", "Nokia", "Huwawei"];
  const pCategory = ["Phone", "Laptop", "Accessories"];

  return (
    <div className="mb-24">
      <h1 className="text-center font-bold text-4xl text-green-500">
        Create Product
      </h1>

      <div className="w-full flex items-center justify-center mt-5 ">
        <div className="border  w-[700px] p-8 rounded-lg">
          <div className=" items-center">
            <h1>Name</h1>

            <TextField
              id="outlined-basic"
              placeholder="Type Name"
              variant="outlined"
              size="small"
              fullWidth
              value={formData.name}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className=" mt-5">
            <h1>Brand</h1>

            <Autocomplete
              fullWidth
              size="small"
              disablePortal
              options={pBrand}
              id="combo-box-demo"
              value={formData.brand}
              onChange={(e, value) => {
                setFormData({
                  ...formData,
                  brand: value,
                });
              }}
              renderInput={(params) => (
                <TextField placeholder="Choose Brand" {...params} />
              )}
            />
          </div>
          <div className="items-center mt-5">
            <h1>Category</h1>
            <Autocomplete
              fullWidth
              size="small"
              disablePortal
              options={pCategory}
              id="combo-box-demo"
              value={formData.category}
              onChange={(e, value) => {
                setFormData({
                  ...formData,
                  category: value,
                });
              }}
              renderInput={(params) => (
                <TextField placeholder="Choose Category" {...params} />
              )}
            />
          </div>
          <div className=" items-center mt-5">
            <h1>Price</h1>

            <TextField
              id="outlined-basic"
              placeholder="Enter Price"
              variant="outlined"
              size="small"
              fullWidth
              type="number"
              value={formData.price}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  price: e.target.value,
                });
              }}
            />
          </div>
          <div className=" items-center mt-5">
            <h1>Description</h1>

            <TextField
              id="outlined-basic"
              placeholder="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={formData.description}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  description: e.target.value,
                });
              }}
            />
          </div>
          <div className=" items-center mt-5">
            <h1>Phone Details</h1>

            <TextField
              id="outlined-basic"
              placeholder="Phone Details"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={formData.phoneDetail}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  phoneDetail: e.target.value,
                });
              }}
            />
          </div>
          {formData.image && (
            <div className=" mt-5 flex justify-center items-center">
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Product preview"
                className="w-[100px]"
              />
            </div>
          )}
          <div className=" items-center mt-5">
            <h1>Image</h1>

            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              fullWidth
              type="file"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  image: e.target.files[0],
                });
              }}
            />
          </div>
          <div className="p-10 flex gap-5 justify-center">
            <Button
              onClick={saveProduct}
              variant="contained"
              className="w-[200px]"
            >
              Submit
            </Button>
            <Link to={"/"}>
              <Button variant="outlined" className="w-[200px]">
                cancel
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
