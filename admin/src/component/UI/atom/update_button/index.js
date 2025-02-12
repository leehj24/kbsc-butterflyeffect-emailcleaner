import React from "react";
import useStyles from "./style";
import axios from "axios";
import { Button, Grid, Paper, Avatar } from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const classes = useStyles();

  const updateHandler = () => {
    Swal.fire({
      title: "Do you want to save the Update User Point?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    })
      .then((result) => {
        if (result.isConfirmed) {
          // axios
          axios.get("api/admin/updateMiles").then(() => {
            Swal.fire("Updated!", "", "success");
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "업데이트에 실패하셧습니다.",
        });
      });
  };

  return (
    <Grid container spacing={2}>
      <Paper elevation={10} className={classes.paper}>
        <Grid align="center">
          <Avatar className={classes.avatar}>
            <UpdateIcon className={classes.icon} />
          </Avatar>
          <h2>Update</h2>
        </Grid>
        <Grid item>
          <Button
            onClick={updateHandler}
            size="large"
            className={classes.learnerButton}
            variant="contained"
          >
            Update
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default UpdatePage;
