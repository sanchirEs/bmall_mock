import React, { useState } from "react";
import css from "./style.module.css";
import * as actions from "../../redux/actions/signupActions";
import { connect } from "react-redux";
import Logo from "../../components/Logo";

const SingupPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let signup = () => {
    props.signupUser(email, password);
    alert(props.firebaseError);
  };

  return (
    <div className={css.Login}>
      <Logo />
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
      <button onClick={signup}>login</button>

      {props.firebaseError && (
        <div style={{ color: "red"}}>{props.firebaseError}</div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    saving: state.signupReducer.saving,
    firebaseError: state.signupReducer.firebaseError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingupPage);