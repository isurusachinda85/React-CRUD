import React, { useEffect, useState } from "react";
import ProductService from "../service/ProductService";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const ProductList = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    loadAllProductData();
  }, []);

  const loadAllProductData = async () => {
    let res = await ProductService.getAllProduct();
    //console.log(res);

    if (res.status === 200) {
      setProductData(res.data);
    } else {
      console.log("error");
    }
  };
  return (
    <div>
      <h1 className="text-center font-bold text-4xl text-blue-600">
        Product List
      </h1>

      <div className="flex flex-wrap justify-around  gap-10 p-10 mb-24">
        {productData?.map((data, index) => {
          console.log(data);

          if (data.brand === "Apple") {
            return (
              <Card
                key={index}
                variant="outlined"
                className="h-[350px] w-[280px] shadow-md"
              >
                <div className="w-full h-[45%] flex items-center justify-center bg-[#f8f9fa]">
                  <img
                    className="w-[150px] "
                    src={`http://localhost:4000/` + data.image}
                    alt=""
                  />
                </div>
                <div className="w-full h-[55%] p-5 ">
                  <div className="w-full h-[20%] font-bold text-[20px] flex items-center ">
                    <h1>{data.name}</h1>
                  </div>
                  <div className="w-full h-[30%] flex items-center ">
                    <h1>{data.description}</h1>
                  </div>
                  <div className="w-full h-[20%] text-[#09bafa] font-bold flex items-center ">
                    <h1>
                      {data.price}{" "}
                      <span className="text-black text-[10px]">LKR</span>
                    </h1>
                  </div>
                  <div className="w-full h-[30%] flex items-center">
                    <Button
                      className="h-[33px] w-56"
                      variant="contained"
                      style={{ background: "#09bafa" }}
                      endIcon={<AddShoppingCartOutlinedIcon />}
                    >
                      Add Cart
                    </Button>
                  </div>
                </div>
              </Card>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ProductList;
