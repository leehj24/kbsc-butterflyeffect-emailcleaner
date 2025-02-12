import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import Swal from "sweetalert2";
import useStyles from "./style";

const Login = (props) => {
  const [id, setUserId] = useState("");
  const [password, setUserPw] = useState("");

  const classes = useStyles();

  const navigate = useNavigate();

  /*EventHandler*/
  const onIdHandler = (e) => {
    setUserId(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setUserPw(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let data = {
      id: id,
      password: password,
    };
    axios
      .post("/api/admin/login", data)
      .then((response) => {
        const isSuccess = response.data;
        console.log(isSuccess);
        if (isSuccess) {
          localStorage.setItem("accessToken", response.data.accessToken);
          Swal.fire({
            icon: "success",
            title: "SUCCESS!",
            text: "성공하셨습니다.",
          }).then(navigate("/admin"));
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "로그인에 실패하셧습니다.",
        });
      });
  };
  return (
    <Grid>
      <form onSubmit={onSubmitHandler}>
        <Paper elevation={10} className={classes.paper}>
          <Grid align="center">
            <Avatar className={classes.avatar}>
              <EmojiPeopleIcon className={classes.icon} />
            </Avatar>
            <h2>SIGN IN</h2>
          </Grid>
          <TextField
            label="User Id"
            placeholder="Enter UserId"
            fullWidth
            required
            onChange={onIdHandler}
            className={classes.id}
          />
          <TextField
            label="Password"
            type="password"
            placeholder="Enter Password"
            fullWidth
            required
            onChange={onPasswordHandler}
            className={classes.password}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            className={classes.button}
          >
            SIGN IN
          </Button>
        </Paper>
      </form>
    </Grid>
  );
};

export default Login;
