import axios from "../axios";

class ProductService {
  createProduct = async (data) => {
    const promise = new Promise((resolve, reject) => {
      // console.log(data);

      axios
        .post("product", data)
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          return resolve(er);
        });
    });
    return await promise;
  };

  getAllProduct = async () => {
    const promise = new Promise((resolve, reject) => {
      axios
        .get("product")
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          return resolve(er);
        });
    });
    return await promise;
  };
}

export default new ProductService();
