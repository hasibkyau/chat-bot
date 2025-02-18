import React, { Component, useState } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { auth } from "./actionCreators";
import "./css/Button.css";
import "./css/components.css";

function SignUp() {
  const [count, setCount] = useState(1);
//   const [mode, setMode] = useState("Sign Up");
  const [mode, setMode] = useState("Sign Up");
  const navigate = useNavigate();

  let err = null;
  let form = null;

  form = (
    <Formik
      initialValues={{
        first_name: "",
        last_Name: "",
        phone_number: "",
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        auth(values, 'login');
        setTimeout(() => {
          navigate("/");
        }, 2000);
        // console.log('isValid', isValid);
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        // if (!values.password) {
        //     errors.password = 'Required';
        // } else if (values.password.length < 8) {
        //     errors.password = 'Must be atleast 8 characters!';
        // }
        //console.log("Errors:", errors)
        return errors;
      }}
    >
      {({ values, handleChange, handleSubmit, errors }) => (
        <form onSubmit={handleSubmit}>
          {mode === "Sign Up" ? (
            count === 1 ? (
              <div>
                <p className="Title1">Login/register </p>
                <div className="inputContainer">
                <input
                  required={true}
                  name="first_name"
                  placeholder="First Name"
                  className="input-effect"
                  value={values.first_name}
                  onChange={handleChange}
                />

                <input
                  required={true}
                  name="last_Name"
                  placeholder="Last Name"
                  className="input-effect"
                  value={values.last_Name}
                  onChange={handleChange}
                />

                <input
                  required={true}
                  name="email"
                  placeholder="Email"
                  className="input-effect"
                  value={values.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input-effect"
                  value={values.password}
                  onChange={handleChange}
                />
                </div>
                <div className="button-container">
                <button
                  className="send-message"
                  type="submit"
                >Send Message
                </button>
                
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p style={{ textAlign: "center" }}>
                  Already have an account?{" "}
                  <b
                    style={{
                      cursor: "pointer",
                      color: "#1678CB",
                      textDecoration: "underline",
                    }}
                    onClick={() => setMode("Login")}
                  >
                    LOGIN HERE!
                  </b>
                </p>
                <br />
              </div>
            ) : count === 2 ? (
              <div>
                <p className="Title1">SignUp Form</p>
                <input
                  required={true}
                  name="phone_number"
                  placeholder="Phone Number"
                  className="input-effect"
                  value={values.phone_number}
                  onChange={handleChange}
                />
                <br />
                <br />
                <br />

                <input
                  required={true}
                  name="email"
                  placeholder="Enter Your Email"
                  className="input-effect"
                  value={values.email}
                  onChange={handleChange}
                />

                <br />
                <br />
                <br />

                <div className="container">
                  <div className="row">
                    <div className="col-4">
                      <button
                        className="backButton"
                        onClick={() => setCount(count - 1)}
                      >
                        Back
                      </button>
                    </div>
                    <div className="col-4">
                      <button
                        className="arrow-button"
                        onClick={() => setCount(count + 1)}
                      >
                        Next Step<span className="arrow"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <p style={{ textAlign: "center" }}>
                  Already have an account?{" "}
                  <b
                    style={{
                      cursor: "pointer",
                      color: "#1678CB",
                      textDecoration: "underline",
                    }}
                    onClick={() => setMode("Login")}
                  >
                    LOGIN HERE!
                  </b>
                </p>
                <br />
              </div>
            ) : count === 3 ? (
              <div>
                <p className="Title1">SignUp Form</p>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input-effect"
                  value={values.password}
                  onChange={handleChange}
                />
                <br />
                <span
                  style={{
                    paddingLeft: "5px",
                    textAlign: "left",
                    fontStyle: "italic",
                    color: "black",
                  }}
                >
                  {errors.password}
                </span>
                <br />
                <br />
                <br />

                <div className="container">
                  <div className="row">
                    <div className="col-4">
                      <button
                        className="backButton"
                        onClick={() => setCount(count - 1)}
                      >
                        Back
                      </button>
                    </div>
                    <div className="col-4">
                      <button className="arrow-button" type="submit">
                        Sign Up<span className="arrow"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p style={{ textAlign: "center" }}>
                  Already have an account?{" "}
                  <b
                    style={{
                      cursor: "pointer",
                      color: "#1678CB",
                      textDecoration: "underline",
                    }}
                    onClick={() => setMode("Login")}
                  >
                    LOGIN HERE!
                  </b>
                </p>
                <br />
              </div>
            ) : null
          ) : (
            <div>
              <p className="Title1">Log In Form</p>

              <input
                type="text"
                required={true}
                name="email"
                placeholder="Enter Your Email"
                // className="input-effect"
                className="input-effect"
                value={values.email}
                onChange={handleChange}
              />
              <br />
              <br />
              <br />
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input-effect"
                value={values.password}
                onChange={handleChange}
              />
              <br />
              <span
                style={{
                  paddingLeft: "5px",
                  textAlign: "center",
                  color: "black",
                }}
              >
                {errors.password}
              </span>
              <br />
              <br />
              <br />
              <div>
                <button className="loginButton" type="submit">
                  Login<span className="arrow"></span>
                </button>
                <br />
                <br />
                <br />
                <br />
                <p style={{ textAlign: "center" }}>
                  Don't have an account?{" "}
                  <b
                    style={{
                      cursor: "pointer",
                      color: "#1678CB",
                      textDecoration: "underline",
                    }}
                    onClick={() => setMode("Sign Up")}
                  >
                    SIGN UP HERE!
                  </b>
                </p>
                <br />
              </div>
            </div>
          )}
        </form>
      )}
    </Formik>
  );

  return (
    <div className="formContainer">
      {err}
      {form}
    </div>
  );
}

export default SignUp;

// export default connect('', mapDispatchToProps)(SignUp);
