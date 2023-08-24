import React, { useState } from "react";
import css from "./style.module.css";
import * as actions from "../../redux/actions/loginActions";
import { connect } from "react-redux";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let login = () => {
    props.login(email, password);
    alert(props.firebaseError);
  };

  return (
    <div className={css.Login}>
      <input
        type="text"
        placeholder="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={login}>login</button>

      {props.firebaseError && (
        <div style={{ color: "red"}}>{props.firebaseError}</div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggingIn: state.signupReducer.saving,
    firebaseError: state.signupReducer.firebaseError,
    userId: state.signupReducer.userId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) =>
      dispatch(actions.loginUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);