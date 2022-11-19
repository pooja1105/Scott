import React from "react";
import SignUp from "./components/SignUp";
import ForgotPass from "./components/ForgotPass";
import Login from "./components/Login";
import ResetPass from "./components/ResetPass";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Apii from "./components/Apii";


function App() {
  return (
    <>
    <div>
<Apii />
    </div>
      {/* <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/forgotpass" component={ForgotPass} />
          <Route exact path="/resetpass" component={ResetPass} />
        </Switch>
      </BrowserRouter> */}
    </>
  );
}

export default App;
