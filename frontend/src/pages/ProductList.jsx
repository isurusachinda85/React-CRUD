import React, { useEffect, useState } from "react";
import ProductService from "../service/ProductService";

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
      <h1 className="text-center font-bold text-4xl text-green-500">
        Product List
      </h1>

      <div className="border border-black flex justify-around  gap-10 p-10">
        {productData.map((data, index) => {
          console.log(data);

          if (data.brand === "Apple") {
            return (
              <div
                key={index}
                className="border border-black w-[300px] h-[300px] "
              >
                <img
                  className="w-[150px] "
                  src={`http://localhost:4000/` + data.image}
                  alt=""
                />
                <h1>{data.name}</h1>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ProductList;
