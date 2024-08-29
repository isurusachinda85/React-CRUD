import { Button, IconButton, TextField, Tooltip } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import ProductService from "../service/ProductService";

const Home = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    loadAllProductData();
  }, []);

  const loadAllProductData = async () => {
    let res = await ProductService.getAllProduct();
    console.log(res);

    if (res.status === 200) {
      setProductData(res.data);
    } else {
      console.log("error");
    }
  };

  return (
    <div className="mb-24">
      <h1 className="text-center font-bold text-4xl text-green-500">Product</h1>

      <div className="pt-5 pl-16 pr-16 grid md:grid-cols-2 items-center sm:grid-cols-1 gap-2">
        <div className=" col-span-1">
          <Link to="/product">
            <Button variant="contained">Create Product</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-3 items-center sm:grid-cols-1 ">
          <div className="col-span-2 ">
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              placeholder="search"
              fullWidth
            />
          </div>
          <div className="">
            <Button className="w-[130px]" variant="outlined">
              Search
            </Button>
          </div>
        </div>
        <div className="col-start-1 md:col-end-3 sm:col-end-1 mt-8">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Brand</TableCell>
                  <TableCell align="center">Category</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Image</TableCell>
                  <TableCell align="center">Description</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.brand}</TableCell>
                    <TableCell align="center">{row.category}</TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                    <TableCell align="center">
                      <img
                        className="w-[100px]"
                        src={`http://localhost:3000/product/ ${row.image}`}
                        alt=""
                      />
                    </TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit">
                        <IconButton>
                          <EditIcon color="primary" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton>
                          <DeleteIcon color="error" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Home;
