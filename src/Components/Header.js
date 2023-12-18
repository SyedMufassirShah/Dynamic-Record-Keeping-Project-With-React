import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const Header = () => {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  const addData = () => {
    setData([...data, form]);
    setForm({name: "", email: ""})
  }
  const removeData = (index) => {
    let updatedData = [...data];
    updatedData.splice(index, 1);
    setData([...updatedData]);
  }
  return (
    <div className="header">
      <div className="UserInputSection">
        <Stack spacing={2} direction="row">
          <TextField
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            id="name-basic"
            label="Name"
            variant="filled"
          />
          <TextField
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            id="email-basic"
            label="Email"
            variant="filled"
          />
          <Button onClick={() => addData()} variant="contained" color="success">
            Contained
          </Button>
        </Stack>
      </div>
      <div className="dataDisplayBar">
        <h4>Name</h4>
        <h4>Email</h4>
        <Button variant="outlined" color="error">
          Delete
          <DeleteIcon />
        </Button>
      </div>
      {data.map((element, index) => {
        return (
          <div key={index} className="dataDisplayBar">
            <h4>{element.name}</h4>
            <h4>{element.email}</h4>
            <Button onClick={() => removeData(index)} variant="outlined" color="error">
              Delete
              <DeleteIcon />
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
