import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import CommonButton from "../../components/Button/CommonButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";

export default class Home extends Component {
  render() {
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
                />
                <div className="h-full w-[25%] flex items-center ">
                  <CommonButton
                    className="h-[70%]"
                    onClick={this.updateCustomer}
                    variant="outlined"
                    startIcon={<SearchIcon />}
                  />
                </div>
              </div>
              <div className="h-full w-[25%] flex items-center">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className="h-full w-[25%] flex items-center">
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>

            <div className="h-[10%] mt-8 flex flex-row justify-around ml-40 mr-40">
              <div className="w-[20%] flex items-center justify-center">
                <CommonButton label="save" onClick={this.saveCustomer} />
              </div>
              <div className="w-[20%] flex items-center justify-center">
                <CommonButton
                  label="update"
                  onClick={this.updateCustomer}
                  color="success"
                />
              </div>
              <div className="w-[20%] flex items-center justify-center">
                <CommonButton
                  label="Delete"
                  onClick={this.deleteCustomer}
                  color="error"
                />
              </div>
              <div className="w-[20%] flex items-center justify-center">
                <CommonButton
                  label="Clear"
                  onClick={this.clearTextField}
                  color="secondary"
                />
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
                  <TableBody></TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </>
    );
  }
}
