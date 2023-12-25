import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import TextField from "@mui/material/TextField";
import "./addUser.scss";
import Radio from "@mui/material/Radio";
import { v4 as uuidv4 } from "uuid";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { postUser } from "../../redux/slices/AdminUserSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./../../redux/store/store.ts";
import Swal from "sweetalert2";
function AddUser() {
  const datas = useSelector((state: RootState) => state.users.users);

  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const dispatch = useDispatch();
  return (
    <div className="addUser">
      <Navbar />

      <div className="head-inputs">
        <div>
          <h1>Add User</h1>
        </div>
        <div className="inputs">
          <TextField
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            id="outlined-basic"
            label="userName"
            variant="outlined"
          />
          <TextField
            onChange={(e) => {
              setPass(e.target.value);
            }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
          <TextField
            onChange={(e) => {
              setSurname(e.target.value);
            }}
            id="outlined-basic"
            label="Surname"
            variant="outlined"
          />
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Public or Private account(default Private)
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                onChange={() => {
                  setIsPublic(true);
                }}
                value="Public"
                control={<Radio />}
                label="Public"
              />
              <FormControlLabel
                onChange={() => {
                  setIsPublic(false);
                }}
                value="Private"
                control={<Radio />}
                label="Private"
              />
            </RadioGroup>
          </FormControl>
          <Button
            onClick={() => {
              let findUserName = datas.find(
                (elem: object) => elem.username == username
              );
              let findEmail = datas.find((elem) => elem.email == email);
              console.log(findUserName);
              if (!username || !pass || !surname || !email) {
                Swal.fire({
                  title: "Error!",
                  text: "Input is Empty",
                  icon: "error",
                  confirmButtonText: "Cool",
                });
              } else if (findUserName) {
                Swal.fire({
                  title: "Error!",
                  text: "This Username already used",
                  icon: "error",
                  confirmButtonText: "Cool",
                });
              } else if (findEmail) {
                Swal.fire({
                  title: "Error!",
                  text: "This Email already used",
                  icon: "error",
                  confirmButtonText: "Cool",
                });
              } else {
                const obj: object = {
                  username: username,
                  surname: surname,
                  password: pass,
                  email: email,
                  isPublic: isPublic,
                  id: uuidv4(),
                  isAdmin: false,
                };
                dispatch(postUser(obj));
              }
            }}
            variant="contained"
          >
            Create User
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
