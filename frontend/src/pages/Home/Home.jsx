import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import CustomerService from "../../service/CustomerService";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

//   //Load All Data
//   loadData = async () => {
//     let res = await CustomerService.getAllCustomer();
//     if (res.status === 200) {
//       this.setState({
//         data: res.data,
//       });
//     }
//   };

/* //   //Find By Data
//   findCustomer = async () => {
//     let id = this.state.formData.id;
//     let res = await CustomerService.findCustomer(id);
//     if (res.status === 200) {
//       this.setState({
//         data: res.data,
//       });
//     }
//   }; */

const Home = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    loadAllData();
  }, []);
  // console.log(data);

  //form clear
  const clear = () => {
    setFormData({
      id: "",
      name: "",
      address: "",
    });
  };

  //post data
  const saveData = async () => {
    let res = await CustomerService.saveCustomer(formData);
    if (res.status === 201) {
      alert("Save");
      clear();
      loadAllData();
    } else {
      alert("Error");
    }
  };

  //put data
  const updateData = async () => {
    let res = await CustomerService.updateCustomer(formData);
    console.log(res);

    if (res.status === 200) {
      alert(res.data.message);
      clear();
      loadAllData();
    } else {
      alert("Error");
    }
  };

  //delete data
  const deleteData = async () => {
    let res = await CustomerService.deleteCustomer(formData.id);
    console.log(res);

    if (res.status === 200) {
      alert(res.data.message);
      clear();
      loadAllData();
    } else {
      alert("Error");
    }
  };

  //load All Data
  const loadAllData = async () => {
    let res = await CustomerService.getAllCustomer();

    if (res.status === 200) {
      setData(res.data);
    }
  };

  return (
    <>
      <div className="h-[100vh] flex flex-col items-center justify-center ">
        <div className="text-blue-600 text-3xl font-bold mb-5">
          <h2>React CRUD</h2>
        </div>

        <div className=" w-[60%] h-[80%] shadow-2xl">
          <div className="h-[10%] flex flex-row justify-around mt-5">
            <div className="h-full w-[30%] flex items-center">
              <TextField
                id="outlined-basic"
                label="ID"
                variant="outlined"
                size="small"
                value={formData.id}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    id: e.target.value,
                  });
                }}
              />
              <div className="h-full w-[25%] flex items-center ">
                <Button
                  variant="outlined"
                  style={{ height: "70%" }}
                  startIcon={<SearchIcon />}
                ></Button>
              </div>
            </div>
            <div className="h-full w-[25%] flex items-center">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                size="small"
                value={formData.name}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  });
                }}
              />
            </div>
            <div className="h-full w-[25%] flex items-center">
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                size="small"
                value={formData.address}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    address: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div className="h-[10%] mt-8 flex flex-row justify-around ml-40 mr-40">
            <div className="w-[20%] flex items-center justify-center">
              <Button variant="contained" onClick={saveData}>
                Save
              </Button>
            </div>
            <div className="w-[20%] flex items-center justify-center">
              <Button variant="contained" color="success" onClick={updateData}>
                Update
              </Button>
            </div>
            <div className="w-[20%] flex items-center justify-center">
              <Button variant="contained" color="error" onClick={deleteData}>
                Delete
              </Button>
            </div>
            <div className="w-[20%] flex items-center justify-center">
              <Button
                onClick={clear}
                variant="contained"
                style={{ background: "yellow", color: "black" }}
              >
                Clear
              </Button>
            </div>
          </div>

          <div className=" mt-5 mr-32 ml-32">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="Customer table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Address</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.address}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
      {/* <CommonSnackBar
          open={this.state.open}
          onClose={() => {
            this.setState({ open: false });
          }}
          message={this.state.message}
          autoHideDuration={3000}
          severity={this.state.severity}
          variant="filled"
        /> */}
    </>
  );
};

export default Home;
