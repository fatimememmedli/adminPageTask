import React, { useState, useEffect } from "react";
// import { RootState } from "./../../redux/store/store.ts";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./adminLogin.scss";
function AdminLogin() {
  const [data, setData] = useState([]);
  // const datas = useSelector((state: RootState) => state.users.users);
  // console.log(datas);
  useEffect(() => {
    axios.get("https://usersapitaskk.onrender.com/users").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  return (
    <div className="adminLogin">
      <div className="box">
        <div>
          <h1>Admin Login</h1>
        </div>
        <div className="inputs">
          <div className="input">
            <TextField
              id="standard-multiline-flexible"
              label="Username"
              multiline
              maxRows={4}
              variant="standard"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="input">
            <TextField
              onChange={(e) => {
                setPass(e.target.value);
              }}
              id="standard-multiline-flexible"
              label="Password"
              multiline
              maxRows={4}
              variant="standard"
            />
          </div>
        </div>
        <Button
          onClick={() => {
            const findAdmin = data.find(
              (elem) =>
                // isAdmin === true &&
                elem.username == username && elem.password == pass
            );
            console.log(findAdmin);
            if (findAdmin) {
              localStorage.setItem("admin", JSON.stringify(findAdmin));
              navigate("/dashboard");
            }
          }}
          variant="contained"
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default AdminLogin;
