import React, { useEffect, useState } from "react";
import ProductService from "../service/ProductService";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);

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

          <div className="w-[700px] h-[600px]  p-5 border border-black">
            <h1 className="font-bold text-[45px] pb-2 mt-5">
              {data.description}
            </h1>
            <h1 className=" text-2xl text-[#09bafa] font-bold mt-5">
              {data.price} <span className="text-black text-[15px]"> LKR</span>
            </h1>
            <h1 className=" mt-5 text-[15px]">Category : {data.category}</h1>
            <h1 className=" mt-5 text-[15px]">Brand : {data.brand}</h1>
            <p className=" mt-5 font-bold">{data.phoneDetail}</p>

            <div className="flex justify-center pt-6 gap-5 border border-black">
              <button className="border border-[#09bafa] w-10  font-bold text-[#09bafa] rounded-md  hover:text-black hover:border-black">
                +
              </button>
              <h1>0</h1>
              <button className="border border-[#09bafa] w-10  font-bold text-[#09bafa] rounded-md  hover:text-black hover:border-black">
                -
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
