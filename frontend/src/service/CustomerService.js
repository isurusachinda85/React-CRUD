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

  saveCustomer = async (data) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .post("customer", data)
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          return resolve(er);
        });
    });
    return await promise;
  };

  deleteCustomer = async (id) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .delete(`customer/${id}`)
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          return resolve(er);
        });
    });
    return await promise;
  };

  updateCustomer = async (data) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .put(`customer/${data.id}`, data)
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          return resolve(er);
        });
    });
    return await promise;
  };

  findCustomer = async (id) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .get(`customer/${id}`)
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
