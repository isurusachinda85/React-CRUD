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

// export default class Home extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [],

//       formData: {
//         id: "",
//         name: "",
//         address: "",
//       },

//       //for snack bar
//       open: false,
//       message: "",
//       severity: "",
//     };
//   }

//   componentDidMount() {
//     this.loadData();
//   }

//   //Load All Data
//   loadData = async () => {
//     let res = await CustomerService.getAllCustomer();
//     if (res.status === 200) {
//       this.setState({
//         data: res.data,
//       });
//     }
//   };

//   //Save Data
//   saveCustomer = async () => {
//     let formdata = this.state.formData;
//     let res = await CustomerService.saveCustomer(formdata);

//     if (res.status === 201) {
//       this.setState({
//         open: true,
//         message: res.data.massage,
//         severity: "success",
//       });
//       this.loadData();
//       this.clearTextField();
//     } else {
//       this.setState({
//         open: true,
//         message: res.response.data.error,
//         severity: "error",
//       });
//     }
//   };

//   //Delete Data
//   deleteCustomer = async () => {
//     let id = this.state.formData.id;
//     let res = await CustomerService.deleteCustomer(id);

//     if (res.status === 200) {
//       this.setState({
//         open: true,
//         message: res.data.message,
//         severity: "success",
//       });
//       this.loadData();
//       this.clearTextField();
//     } else {
//       this.setState({
//         open: true,
//         message: res.response.data.error,
//         severity: "error",
//       });
//     }
//   };

//   //Update Data
//   updateCustomer = async () => {
//     let formdata = this.state.formData;
//     let res = await CustomerService.updateCustomer(formdata);
//     if (res.status === 200) {
//       this.setState({
//         open: true,
//         message: res.data.message,
//         severity: "success",
//       });
//       this.loadData();
//       this.clearTextField();
//     } else {
//       this.setState({
//         open: true,
//         message: res.response.data.error,
//         severity: "error",
//       });
//     }
//   };

//   //Find By Data
//   findCustomer = async () => {
//     let id = this.state.formData.id;
//     let res = await CustomerService.findCustomer(id);
//     if (res.status === 200) {
//       this.setState({
//         data: res.data,
//       });
//     }
//   };

//   clearTextField = () => {
//     this.setState({
//       formData: {
//         id: "",
//         name: "",
//         address: "",
//         mobile: "",
//       },
//     });
//   };

//   render() {
//     return (

//     );
//   }
// }

const Home = () => {
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
                /* value={this.state.formData.id}
                  onChange={(e) => {
                    let formdata = this.state.formData;
                    formdata.id = e.target.value;
                    this.setState({ formdata });
                  }} */
              />
              <div className="h-full w-[25%] flex items-center ">
                {/* <CommonButton
                    className="h-[70%]"
                    onClick={this.findCustomer}
                    variant="outlined"
                    startIcon={<SearchIcon />}
                  /> */}
              </div>
            </div>
            <div className="h-full w-[25%] flex items-center">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                size="small"
                /* value={this.state.formData.name}
                  onChange={(e) => {
                    let formdata = this.state.formData;
                    formdata.name = e.target.value;
                    this.setState({ formdata });
                  }} */
              />
            </div>
            <div className="h-full w-[25%] flex items-center">
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                size="small"
                /* value={this.state.formData.address}
                  onChange={(e) => {
                    let formdata = this.state.formData;
                    formdata.address = e.target.value;
                    this.setState({ formdata });
                  }} */
              />
            </div>
          </div>

          <div className="h-[10%] mt-8 flex flex-row justify-around ml-40 mr-40">
            <div className="w-[20%] flex items-center justify-center">
              <button>Save</button>
            </div>
            <div className="w-[20%] flex items-center justify-center">
              <button>Update</button>
            </div>
            <div className="w-[20%] flex items-center justify-center">
              <button>Delete</button>
            </div>
            <div className="w-[20%] flex items-center justify-center">
              <button>Clear</button>
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
                  {/* {this.state.data.map((row) => (
                      <TableRow>
                        <TableCell align="center">{row.id}</TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{row.address}</TableCell>
                      </TableRow>
                    ))} */}
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
