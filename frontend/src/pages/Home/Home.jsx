import React, { Component } from "react";
import TextField from "@mui/material/TextField";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="border border-black h-[100vh] flex flex-col items-center justify-center ">
          <div className="text-blue-600 text-3xl font-bold mb-5">
            <h2>React CRUD</h2>
          </div>

          <div className=" w-[80%] h-[80%] shadow-2xl">
            <div className="border border-black h-[10%] flex flex-row justify-around mt-5">
              <div className="border border-black h-full w-[25%] flex items-center">
                <TextField
                  id="outlined-basic"
                  label="ID"
                  variant="outlined"
                  size="small"
                />
                <div className="border border-black h-full w-[25%] "></div>
              </div>
              <div className="border border-black h-full w-[25%] flex items-center">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className="border border-black h-full w-[25%] flex items-center">
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
