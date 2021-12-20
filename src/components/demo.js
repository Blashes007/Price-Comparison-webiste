import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../app.css";
import { Avatar, TextField, Button } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useState } from "react";
import LockIcon from "@material-ui/icons/Lock";
import { Alert } from "@material-ui/lab";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useNavigate } from "react-router-dom";
import LinearWithValueLabel from "../progress";



const paperStyle = { margin: "0px auto", border: "none" };
const divstyle = { marginTop: "20px" };
const btnstyle = { marginTop: "50px", color: "white" };
const popup = { position: "absolute", right: "5px", top: "10px" };
const popup1 = { display: "none", color: "green" };
const popup2 = { display: "none", color: "red" };
const centercontent = { textAlign: "center" };
const container = { height: "500px", overflow: "hidden" };
var CryptoJS = require("crypto-js");

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
// function Login()
// {
//   document.getElementById("myBtn").setAttribute("disabled", 'true');
// }
function Demo() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  var handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.code === "Enter") {
      // handleSubmit();
      Login();
    }
  };
  const [disable, setDisable] = React.useState(false);

  async function Login() {
    
    // document.getElementById("myBtn").setAttribute("disabled", 'true');

    let result = await fetch(
      "https://api.iotech.com.np/api/loginauthentication",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json0",
          Accept: "application/json",
          username: username,
          password: password,
        },
      }
    );
    result = await result.json();
    var Result = JSON.parse(JSON.stringify(result));

    if (Result.message == "success") {
      sessionStorage.setItem(
        "Username",
        CryptoJS.AES.encrypt(username, "unam@encrypt").toString()
      );
      sessionStorage.setItem(
        "Password",
        CryptoJS.AES.encrypt(password, "pass@encrypt").toString()
      );

      document.getElementById("successlogin").style.display = "block";
      console.log("successlogin");
      const timer = setTimeout(() => {
        navigate("/home");
      }, 1000);
      // navigate("/home");
    } else {
      
      var alertdiv = document.getElementById("failedlogin");
      alertdiv.style.display = "block";
      const timer = setTimeout(() => {
        document.getElementById("failedlogin").style.display = "none";
        setDisable(false);
      }, 4000);
    }
  }


  return (
    <div>
      
      <Paper
        className="box_div"
        elevation={15}
        style={container}
        style={paperStyle}
      >
        <Grid container spacing={0}>
          <Grid className="login_div" item xs>
            <Grid align="center">
              <Avatar className="avatarStyle">
                <LockOutlinedIcon />
              </Avatar>
            </Grid>
            

            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <TextField
                className="usernameTxt"
                label={
                  <span className="InputLabel">
                    <AccountCircle fontSize="small" />
                    <span>Username</span>
                  </span>
                }
                type="Username"
                onChange={(e) => setUsername(e.target.value)}
                fullWidthrequired
              />
            </Box>

            <Box
              style={divstyle}
              sx={{ display: "flex", alignItems: "flex-end" }}
            >
              <TextField
                className="usernameTxt"
                label={
                  <span className="InputLabel">
                    <LockIcon fontSize="small" />
                    <span>Password</span>
                  </span>
                }
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeypress}
                fullWidth
                required
              />
            </Box>
            
            <div style={centercontent}>
            
              <Button
               
                style={btnstyle}
                className="continueBtn"
                variant="contained"
                id="myBtn"
                required
                disabled={disable} onClick={() => {setDisable(true); Login();}}
                
               
              >
                <ArrowCircleRightIcon className="arrowIcon" /> CONTINUE
              </Button>
              
            </div>
           
          </Grid>
          <Grid className="company_name_div" item xs>
            <div className="txtBox">
              <h1>C.M</h1>
              <h1>Auto Center</h1>
            </div>
          </Grid>
        </Grid>
      </Paper>

      <div style={popup}>
        <div id="successlogin" style={popup1}>
          <Alert variant="filled" severity="success">
            <LinearWithValueLabel />
            Logged In Sucessfully!
          </Alert>
        </div>
        <div id="failedlogin" style={popup2}>
          <Alert variant="filled" severity="error">
            Authentication failed. Please check Username and Password{" "}
            <LinearWithValueLabel />
          </Alert>
        </div>
      </div>
    </div>
  );
}

export default Demo;
