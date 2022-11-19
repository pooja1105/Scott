import React from "react";
import Header from "./Header";
import FooterBar from "./FooterBar";
import { makeStyles } from "@mui/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import {Link, useHistory} from "react-router-dom";

const useStyles = makeStyles({
  background: {
    height: "800px",
    backgroundImage: "#ffff",
  },
  heading: {
    position: "relative",
    color: "#002E5B",
    textAlign: "center",
    top: "200px",
  },

  paragraph: {
    position: "relative",
    color: "#676767",
    textAlign: "center",
    top: "200px",
  },
  passworddiv: {
    position: "relative",
    textAlign: "center",
    top: "250px",
    borderRadius: "5px",
    width: "33.512vw",
    height: "2.976vw",
  },
  newheading: {
    position: "relative",
    color: "#000000",
    fontSize: "1.190vw",
    left: "-11.905vw",
    
  },
  btn: {
    width: "33.512vw",
    height: "3.571vw",
    background: "#3AADE1",
    border: 'none',
  },
  button: {
    paddingTop: "3.512vw",
  
  },

  password: {
    width: "33.512vw",
    height: "2.976vw",
    background: "rgba(181, 193, 204, 0.43)",
    border: 'none',
  },
  center: {
    textAlign: "center",
    position: "relative",
    top: "200px",
  },
  go: {
    position: "relative",
    color: "#3AADE1",
    width: "4vw",
    height: "1vw",
    left: "22.262vw",
    top: "160px",
    fontSize: "1.190vw",
  },
  footer2: {
    position: "relative",
    top: "47.619vw",
  },
});

export default function ResetPass() {
  const classes = useStyles();

  const [passLogin, setPassLogin] = useState(false);
  const [CpassLogin, setCPassLogin] = useState(false);
  const [CpassErr, CsetpassErr] = useState(false);
  const [passErr, setpassErr1] = useState(false);
  const [passwordErr, setpassErr] = useState(false);


  const history = useHistory();
  function passHandler(e1) {
    let item1 = e1.target.value;
    let regularpassExpression =
      /^(?=.*\d)(?=(.*\W){1})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/;
    if (regularpassExpression.test(item1)) {
      console.warn("valide");
      setpassErr1(false);
      setPassLogin(true);
    } else {
      console.log("invalid");
      setpassErr1(true);
    }
  }
  function passCHandler(e2) {
    var pw1 = document.getElementById("pass1").value;
    var pw2 = document.getElementById("c-pass").value;
   
    if (pw1 != pw2) {
      console.log("invalid");
      CsetpassErr(true);
    } 
    else if(pw1 == pw2) {
      setCPassLogin(true)
      CsetpassErr(false);

    }
  }
  function submitlogin(){
    if( passLogin == true && CpassLogin == true){
      history.push("/")
    }
    else{
 console.log(passLogin)
 console.log(CpassLogin)
 console.log( document.getElementById("pass1").value,
  document.getElementById("c-pass").value)
    }
  
  }
  
  return (
    <>
      <div className={classes.background}>
        <div>
          <Header />
        </div>
        <Link to='/forgotpass'><p className={classes.go}>
          <ArrowBackIosIcon /> Go Back
        </p> </Link> 
        <h1 className={classes.heading}>Create New Password</h1>
        <p className={classes.paragraph}>
          Lorem lpsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className={classes.center}>
          <div>
            <h3 className={classes.newheading}>New Password</h3>
            <input
            id="pass1"
              type="password"
              placeholder="Enter your password"
              className={classes.password}
              onChange={passHandler}
            />{" "}
            <br />
            {passErr ? (
              <span className={classes.color} style={{ color: "red" }}>
                Invalid Password
              </span>
            ) : (
              ""
            )}
          </div>
          <div>
            <h3 className={classes.newheading}>Confirm Password</h3>
            <input
            id="c-pass"
              type="password"
              placeholder="Enter your Confirm password"
              className={classes.password}
              onChange={passCHandler}
            />
            <br />{" "}
            {CpassErr ? (
              <span className={classes.color} style={{ color: "red" }}>
                Confirm Password Not Match
              </span>
            ) : (
              ""
            )}
          </div>

          <div className={classes.button}>
            <button 
            onClick={submitlogin}
            className={classes.btn}>Change Password</button>
          </div>
        </div>
        <div className={classes.footer2}>
          <FooterBar />
        </div>
      </div>
    </>
  );
}
