import React from "react";
import Header from "./Header";
import FooterBar from "./FooterBar";
import { makeStyles } from "@mui/styles";
import { Card, CardContent } from "@mui/material";
import { height, width } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import {Link, useHistory} from "react-router-dom";

const useStyles = makeStyles({
  background: {
    height: "800px",
    backgroundImage: "#ffff",
  },
  card: {
    position: "relative",
    height: "36.391vw",
    width: "47.584vw",
    top: "26.004vw",
    left: "18.988vw",
  },
  Back: {
    position: "relative",
    color: "#3AADE1",
    fontSize: "1.190vw",
  },
  Forgot: {
    position: "relative",
    color: "#002E5B",
    fontSize: "2.381vw",
    color: "#002E5B",
    left: "13.452vw",
  },
  Text: {
    position: "relative",
    color: "#676767",
    fontSize: "1.310vw",
    textAlign: "center",
  },
  mobile: {
    position: "relative",
    color: "#000000",
    fontSize: "1.190vw",
    left: "6.012vw",
    top: "2.976vw",
  },
  number3: {
    height: "3vw",
    width: "27.321vw",
    background: "rgba(181, 193, 204, 0.43)",
    border: 'none',
  },
  number1: {
    display: "flex",
    gap: "1vw",
    top: "3.971vw",
    position: "relative",
    left: "6.012vw",
  },
  number2: {
    height: "3vw",
    width: "5vw",
    background: "rgba(181, 193, 204, 0.43)",
    border: 'none'
  },
  Submit: {
    position: "relative",
    width: "33.512vw",
    height: "3.571vw",
    left: "6.012vw",
    top: "5.971vw",
    background: "#3AADE1",
    border: 'none'
  },
  footer1: {
    position: "relative",
    top: "47.619vw",
  },
});

export default function ForgotPass() {
  const classes = useStyles();
  const history = useHistory();

  const [phoneErr,setPhoneErr]=useState(false);
  const [phone,setphone]=useState(false);
  const [select,setSelect]=useState(false);


  function phonenumber(){
    let phone = document.getElementById("phone").value;
    let regex = /^[6-9]{1}[0-9]{9}$/
    if(regex.test(phone)){
     setPhoneErr(false)
     setphone(true)
    }
    else{
      setPhoneErr(true)
    }
  }
  function selectcode(){
    let a = document.getElementById("Country").value;
    if(a == "a1"){
      setSelect(false);
    }
    else if(a == "91"){
      setSelect(true);
    }
    else if(a == "1"){
      setSelect(true);
    }
    else if(a == "44"){
      setSelect(true);

    }
    else{
      alert("select Country code")
    }
  }
  function submitlogin(){
    if( select == true && phone == true){
      history.push("/resetpass")
    }
    else{
      console.log(phone)
      console.log(select)
    }
  
  }
  return (
    <>
      <div className={classes.background}>
        <div>
          <Header />
        </div>
        <Card className={classes.card}>
          <CardContent>
          <Link to='/'><p className={classes.Back}>
             <ArrowBackIosIcon /> Go Back 
            </p> </Link> 
            <h1 className={classes.Forgot}>Forgot Password</h1>
            <p className={classes.Text}>
              Lorem lpsum is simply dummy text of the printing <br />
              and typesetting industry.
            </p>
            <h3 className={classes.mobile}>Mobile Number</h3>
            <div className={classes.number1}>
              <div>
                <select className={classes.number2} id="Country" onChange={selectcode}>
                <option value="Select--">Select</option>
                  <option value="91">+91</option>
                  <option value="1">+1</option>
                  <option value="44">+44</option>
                  
                </select>
              </div>
              <div>
                <input
                id="phone"
                  placeholder="Enter Mobile Number"
                  className={classes.number3}
                  onChange={phonenumber}
                      /><br />
                      {phoneErr?<span style={{ color: "red",}}>Enter valid phone number</span>:""}
              </div>
            </div>

            <div>
              <button onClick={submitlogin} className={classes.Submit}>Submit</button>
            </div>
          </CardContent>
        </Card>
        <div className={classes.footer1}>
          <FooterBar />{" "}
        </div>
      </div>
    </>
  );
}
