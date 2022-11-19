import { Card, CardContent } from "@mui/material";
import React from "react";
import Header from "./Header";
import { makeStyles } from "@mui/styles";
import FooterBar from "./FooterBar";
import { useState } from "react";
import {Link, useHistory} from "react-router-dom";

const useStyles = makeStyles({
  header1: {
    position: "relative",
  },
  background: {
    height: "1000px",
  },

  DD: {
    position: "relative",
    left: "17.988vw",
  },
  card11: {
    position: "relative",
    width: "66.865vw",
    height: "600px",
    top: "30.905vw",
  },
  Login: {
    color: "#002E5B",
    paddingLeft: "20.833vw",
  },

  texxt: {
    position: "relative",
    color: "#000000",
  },

  VIN: {
    background: "rgba(181, 193, 204, 0.43)",
    border: "none",
    width: "33.571vw",
    height: "2.976vw",
  },

  Number22: {
    height: "3.036vw",
    width: "5.774vw",
    background: "rgba(181, 193, 204, 0.43)",
    border: "none",
  },

  Number33: {
    height: "2.976vw",
    width: "27.321vw",
    background: "rgba(181, 193, 204, 0.43)",
    border: "none",
  },
  Code: {
    display: "flex",
    gap: "1vw",
    paddingLeft: "7.024vw",
  },
  Heading: {
    paddingLeft: "7.024vw",
  },
  Name: {
    paddingLeft: "7.024vw",
    color: "#000000",
  },
  line: {
    paddingLeft: "7.024vw",
    color: "#000000",
  },
  lineBox: {
    background: "rgba(181, 193, 204, 0.43)",
    border: "none",
    width: "33.571vw",
    height: "2.976vw",
  },
  buttonns: {
    background: "#3AADE1",
    border: "none",
    width: "33.512vw",
    height: "3.571vw",
    position: "relative",
    top: "3.571vw",
    color: "#FFFFFF",
    borderRadius: "0.595vw",
  },
  bbtn: {
    paddingLeft: "6.926vw",
  },
  aaa: {
    width: "10.952vw",
    height: "4.643vw",
    position: "relative",
    fontSize: "1.310vw",
    color: "#002E5B",
    left: "29.093vw",
    top: "3.900vw",
  },
  neww: {
    width: "13.214vw",
    height: "1.369vw",
    fontSize: "1.190vw",
    position: "relative",
    left: "17.202vw",
    top: "5vw",
  },
  footer3: {
    position: "relative",
    top: "38.619vw",
  },
});

export default function Login() {
  const [password, setPassword] = useState(false);
  const [passwordErr, setpassErr] = useState(false);
  const [passErr, setpassErr1] = useState(false);
  const [passLogin, setPassLogin] = useState(false);
  const [phoneErr,setPhoneErr]=useState(false);
  const [phone,setphone]=useState(false);
  const [select,setSelect]=useState(false);
  const [vin,setVin]=useState(false);
  const [vinErr,setVinErr]=useState(false);

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
  function vinnum(e){
    let item = e.target.value;
    let regex= /^[6-9]{1}[0-9]{9}$/
    if(regex.test(item)){
      setVinErr(false);
      setVin(true);
    }
    else{
      setVinErr(true);
      
    }
  }
function submitlogin(){
  if(passLogin == true && phone == true && select == true && vin == true){
    history.push("/resetpass")
  }
  else{
    console.log(passLogin)
    console.log(phone)
    console.log(select)
    console.log(vin)
    
  }

}
  const classes = useStyles();

  return (
    <>
      <div className={classes.background}>
        <div className={classes.header1}>
          <Header />
        </div>
        <div className={classes.DD}>
          <Card className={classes.card11}>
            <CardContent>
              <div>
                <h1 className={classes.Login}>Login</h1>
                <div className={classes.Heading}>
                  <p className={classes.texxt}>VIN Number</p>
                  <input
                    placeholder=" Enter VIN Number"
                    className={classes.VIN}
                    onChange={vinnum}
                  /><br/>
                  {vinErr?<span style={{ color: "red",}}>Enter valid VIn number</span>:""}
                </div>

                <div>
                  <p className={classes.Name}>Mobile number</p>
                </div>
                <div className={classes.Code}>
                  <div>
                    <select className={classes.Number22} id="Country" onChange={selectcode}>
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
                      className={classes.Number33}
                      onChange={phonenumber}
                      /><br />
                      {phoneErr?<span style={{ color: "red",}}>Enter valid phone number</span>:""}
                  </div>
                </div>
                <div className={classes.line}>
                  <div>
                    <p className={classes.lines}>Password</p>
                  </div>
                  <div>
                    <input
                    type='password'
                      placeholder=" Enter Password"
                      className={classes.lineBox}
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
                </div>
                <div className={classes.bbtn}>
                  <button
                  type="submit"
                   onClick={submitlogin} className={classes.buttonns}>Login</button>
                </div>
                <div>
                  <Link to="/forgotpass" className={classes.aaa}>Forgot Password?</Link>
                </div>
                <div>
                  <Link to="/signup" className={classes.neww}>
                    New Customer?{" "}
                    <span style={{ color: "#002E5B" }}>Register</span>{" "}
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className={classes.footer3}>
          <FooterBar />
        </div>
      </div>
    </>
  );
}
