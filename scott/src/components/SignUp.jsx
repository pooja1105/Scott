import { Card, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Header from "./Header";
import FooterBar from "./FooterBar";
import { useState } from "react";
import {Link, useHistory} from "react-router-dom";

const useStyles = makeStyles({
  card1: {
    position: "relative",
    width: "66.865vw",
    height: "917.93px",
    textAlign: "center",
    top: "30.905vw",
  },
  header: {
    position: "relative",
  },
  CC: {
    position: "relative",
    left: "17.988vw",
  },

  sign: {
    color: "#002E5B",
  },

  Get: {
    color: "#676767",
  },
  First: {
    display: "flex",
    gap: "3vw",
    top: "3.971vw",
    position: "relative",
    left: "6.012vw",
  },
  firstName: {
    width: "25.595vw",
    height: "2.976vw",
    background: "rgba(181, 193, 204, 0.43)",
    border: "none",
  },
  lastName: {
    width: "25.595vw",
    height: "2.976vw",
    background: "rgba(181, 193, 204, 0.43)",
    border: "none",
  },

  name: {
    color: "#000000",
    position: "relative",
    left: "-10vw",
    "@media(max-width:1100px )": {
      left: "-7vw",
    },
  },

  id: {
    position: "relative",
    color: "#000000",
    left: "-24vw",
    top: "4.762vw",
    "@media(max-width:1100px )": {
      left: "-22vw",
    },
  },
  email: {
    width: "54.702vw",
    height: "2.976vw",
    background: "rgba(181, 193, 204, 0.43)",
    position: "relative",
    left: "1vw",
    top: "4.762vw",
    border: "none",
  },
  countrrry: {
    position: "relative",
    color: "#000000",
  },

  Country: {
    position: "relative",
    width: "25.595vw",
    height: "2.976vw",
    background: "rgba(181, 193, 204, 0.43)",
    border: "none",
  },

  main: {
    display: "flex",
    gap: "3vw",
    top: "3.971vw",
    position: "relative",
    left: "6.012vw",
    paddingTop: "2.5vw",
  },
  Number2: {
    height: "3.036vw",
    width: "5.060vw",
    background: "rgba(181, 193, 204, 0.43)",
    border: "none",
  },
  Number3: {
    height: "2.976vw",
    width: "20.060vw",
    background: "rgba(181, 193, 204, 0.43)",
    border: "none",
  },
  selectc: {
    display: "flex",
    gap: "1vw",
  },
  pass: {
    display: "flex",
    gap: "3vw",
    paddingLeft: "6.250vw",
    paddingTop: "6.548vw",
  },
  pass1: {
    color: "#000000",
    position: "relative",
    left: "-10vw",
  },

  pass2: {
    width: "25.595vw",
    height: "2.976vw",
    background: "rgba(181, 193, 204, 0.43)",
    border: "none",
  },
  pass3: {
    width: "25.595vw",
    height: "2.976vw",
    background: "rgba(181, 193, 204, 0.43)",
    border: "none",
  },
  start: {
    background: "#3AADE1",
    border: "none",
    width: "33.512vw",
    height: "3.571vw",
    position: "relative",
    top: "3.571vw",
    color: "#FFFFFF",
    borderRadius: '0.595vw'
  },
  account: {
    position: "relative",
    top: "3.571vw",
    fontSize: "1.190vw",
    color: "#000000",
  },
  footer2: {
    position: "relative",
    top: "38.619vw",
  },
});

export default function SignUp() {
  const [firstname, setfirstname] = useState(false);
  const [lastname, setlastname] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [nameErr1, setNameErr1] = useState(false);
  const [emailErr2, setemailErr2] = useState(false);
  const [passwordErr, setpassErr] = useState(false);
  const [passLogin , setPassLogin]=useState(false);
  const [CpassLogin , CsetPassLogin]=useState(false);
  const [CpassErr,CsetpassErr]=useState(false);
  const [passErr,setpassErr1]=useState(false);
  const [phoneErr,setPhoneErr]=useState(false);
  const [phone,setphone]=useState(false);
  const [select,setSelect]=useState(false);
  const [select1,setSelect1]=useState(false);
  
  const history = useHistory();
 

  function nameHandler1(e3) {
    let item = e3.target.value;
    let regularNameExpression = /^([A-Z][a-z]*).{3,20}$/;
    if (regularNameExpression.test(item)) {
      setfirstname(true);
      setNameErr(false);
    } else {
      setfirstname(false);
      setNameErr(true);
    }
  }

  function nameHandler2(e) {
    let item = e.target.value;
    let regularNameExpression = /^([A-Z][a-z]*).{3,20}$/;
    if (regularNameExpression.test(item)) {
      setlastname(true);
      setNameErr1(false);
    } else {
      setlastname(false);
      setNameErr1(true);
    }
  }
  function emailHandler(e) {
    let item = e.target.value;
    let regularExpression = /^[a-z0-9._+\-\']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;
    if (regularExpression.test(item)) {
      console.log("valid");
      setEmail(true);
      setemailErr2(false);
    } else {
      console.log("invalid");
      setEmail(false);
      setemailErr2(true);
    }
  }
  function passHandler(e1) {
    let item1 = e1.target.value;
    let regularpassExpression= /^(?=.*\d)(?=(.*\W){1})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/
    if(regularpassExpression.test(item1))
    {
      console.warn("valide");
      setpassErr1(false);
      setPassLogin(true);
    }
    else{
      console.log("invalid");
      setpassErr1(true);
    }
  }
  function passCHandler(e2) {
    let item2 = e2.target.value;
    let regularCpassExpression= /^(?=.*\d)(?=(.*\W){1})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/
    if(regularCpassExpression.test(item2))
    {
      console.warn("valide");
      CsetpassErr(false);
      CsetPassLogin(true);
    }
    else{
      console.log("invalid");
      CsetpassErr(true);
    }
    var pw1 = document.getElementById("pass1").value;  
    var pw2 = document.getElementById("c-pass").value; 
    if(pw1 == "") {  
      console.log("invalid");
      setpassErr(true);
    }  
    if(pw2 == "") {  
      console.log("invalid");
      CsetpassErr(true);
    }   
    if(pw1 != pw2) {  
      console.log("invalid");
      CsetpassErr(true);
    }
    else {  

    }  
  }
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
    let a = document.getElementById("Country1").value;
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
  function selectcode1(){
    let a = document.getElementById("Country").value;
    if(a == "Select"){
      setSelect1(false);
    }
    else if(a == "India"){
      setSelect1(true);
    }
    else if(a == "US"){
      setSelect1(true);
    }
    else if(a == "UK"){
      setSelect1(true);

    }
    else{
      alert("select Country code")
    }
  }
  function register(){
    if(firstname == true && lastname == true && email == true
       && passLogin == true && CpassLogin == true && phone== true && select == true
       && select1 == true ){
      history.push("/")
    }
    else{
      
      
    }
  
  }
  const classes = useStyles();
  return (
    <>
      <div>
        <div className={classes.header}>
          <Header />
        </div>
        <div className={classes.CC}>
          <Card className={classes.card1}>
            <CardContent>
              <h1 className={classes.sign}>Sign Up</h1>
              <p className={classes.Get}>Get started with your account</p>

              <div className={classes.First}>
                <div>
                  <p className={classes.name}>First Name*</p>
                  <input
                    placeholder="First Name"
                    onChange={nameHandler1}
                    className={classes.firstName}
                  />{" "}
                  <br />{" "}
                  {nameErr ? (
                    <span style={{ color: "red" }}>Invalid Name</span>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <p className={classes.name}>Last Name*</p>
                  <input
                    placeholder="Last Name"
                    onChange={nameHandler2}
                    className={classes.lastName}
                  />{" "}
                  <br />{" "}
                  {nameErr1 ? (
                    <span style={{ color: "red" }}>Invalid Last Name</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div>
                <p className={classes.id}>Email Id*</p>
                <input
                  placeholder="Enter Email Id"
                  onChange={emailHandler}
                  className={classes.email}
                />{" "}
                {emailErr2 ? (
                  <span
                    style={{ color: "red", position: "relative", top: "2vw" }}
                  >
                    <br /> <br />
                    <br />
                    <br /> Invalid Email Id
                  </span>
                ) : (
                  ""
                )}
              </div>

              <div className={classes.main}>
                <div>
                  <p className={classes.name}>Country*</p>

                  <select className={classes.Country} id="Country" onChange={selectcode1}>
                    <option value="Select">-- Select your Country</option>
                    <option value="India">India</option>
                    <option value="US">US</option>
                    <option value="UK">UK</option>
                  </select>
                </div>

                <div>
                  <p className={classes.name}>Mobile number*</p>
                  <div className={classes.selectc}>
                    <div>
                      <select className={classes.Number2} id="Country1" onChange={selectcode}>
                        <option value="a1">Select</option>
                        <option value="91">+91</option>
                        <option value="1">+1</option>
                        <option value="44">+44</option>
                  
                      </select>
                    </div>
                    <div>
                      <input
                      id="phone"
                        placeholder="Enter Mobile Number"
                        className={classes.Number3}
                        onChange={phonenumber}
                      /><br />
                      {phoneErr?<span style={{ color: "red",}}>Enter valid phone number</span>:""}
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.pass}>
                <div>
                  <p className={classes.pass1}>Password*</p>
                  <input
                  id="pass1"
                  type='password'
                    placeholder="Enter Password"
                    className={classes.pass2}
                    onChange={passHandler}
                  /> <br/>{passErr ? <span className={classes.color} 
                  style={{ color: "red" }}>Invalid Password</span> : ""}
                </div>
                <div>
                  <p className={classes.pass1}>Confirm Password*</p>
                  <input
                  id="c-pass"
                  type='password'
                    placeholder="Re Enter Password"
                    className={classes.pass3}
                    onChange={passCHandler}
                  /> <br/>{CpassErr ? <span className={classes.color} style={{ color: "red" }}>Confirm Password Not Match</span> : ""}
                </div>
              </div>
              <div>
                <button className={classes.start}
                onClick={register}
                >Get Started</button>
              </div>
              <Link to="/" className={classes.account}>
                Already have an Account?{" "}
                <span style={{ color: "#002E5B" }}>Login</span>{" "}
              </Link>
            </CardContent>
          </Card>
        </div>
        <div className={classes.footer2}>
          <FooterBar />
        </div>
      </div>
    </>
  );
}
