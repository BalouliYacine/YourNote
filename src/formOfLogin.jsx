import React from "react";

var userIsRegistered = false;
function Input(props) {
  return <input type={props.type} placeholder={props.plh} />;
}

let tt = "";
function Resgster() {
  return (
    <form className="form">
      <Input type="text" plh="User name" id="inp" />
      <Input type="password" plh="password" />
      {userIsRegistered === false && (
        <Input type="password" plh="confirm password" />
      )}
      <button type="submit">{userIsRegistered ? "login" : "regester"} </button>
    </form>
  );
}

function Form() {
  return (
    <div className="container">
      <h1>Hello {tt} </h1>
      <Resgster />
    </div>
  );
}

export default Form;
