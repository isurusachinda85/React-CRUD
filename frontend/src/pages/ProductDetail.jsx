import React, { useEffect, useState } from "react";
import ProductService from "../service/ProductService";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
const ProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);
  const [number, setNumber] = useState(0);

  const clickPluse = () => {
    if (number < 5) {
      setNumber(number + 1);
    } else {
      alert("maximum order " + number);
    }
  };
  const clickMinus = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const viewProductDetails = async () => {
    let res = await ProductService.viewProductDetail(id);
    if (res.status === 200) {
      setProductData(res.data);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    viewProductDetails();
  }, [id]);
  console.log(productData);

  return (
    <div className="mb-24">
      {productData?.map((data, index) => (
        <div key={index} className=" p-10 flex flex-wrap justify-around gap-8">
          <div className="flex w-[550px] h-[500px]  items-center justify-center bg-[#f8f9fa]  border rounded-md p-10 ">
            <img
              className=" "
              src={`http://localhost:4000/` + data.image}
              alt=""
            />
          </div>

          <div className="w-[700px] h-[60%] p-5 ">
            <h1 className="font-bold text-[45px] pb-2 mt-5">
              {data.description}
            </h1>
            <h1 className=" text-2xl text-[#09bafa] font-bold mt-5">
              <span className="text-black text-2xl"> LKR </span> {data.price}{" "}
              .00
            </h1>
            <h1 className=" mt-5 text-[15px]">Category : {data.category}</h1>
            <h1 className=" mt-5 text-[15px]">Brand : {data.brand}</h1>
            <p className=" mt-5 font-bold">{data.phoneDetail}</p>

            <div className="flex p-5 ">
              <button
                className="border w-[40px] h-[40px] font-bold text-[#09bafa]  hover:text-black hover:border-black "
                onClick={clickPluse}
              >
                +
              </button>
              <h1 className="border  w-[40px] h-[40px] flex justify-center items-center">
                {number}
              </h1>
              <button
                className="border w-[40px] h-[40px]  font-bold text-[#09bafa]   hover:text-black hover:border-black"
                onClick={clickMinus}
              >
                -
              </button>
            </div>
            <div className="w-full flex flex-col gap-5 h-[100px] ">
              <Button
                className="h-[40px] w-56"
                variant="contained"
                style={{ background: "#09bafa" }}
                endIcon={<AddShoppingCartOutlinedIcon />}
              >
                Add Cart
              </Button>

              <Button
                className="h-[40px] w-56"
                sx={{
                  "&:hover": {
                    backgroundColor: "#20bf6b",
                    color: "white",
                    borderColor: "#20bf6b",
                  },
                }}
                variant="outlined"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
