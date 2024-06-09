import axios from "../axios";

class CustomerService {
  getAllCustomer = async () => {
    const promise = new Promise((resolve, reject) => {
      axios
        .get("customer")
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

export default new CustomerService();
