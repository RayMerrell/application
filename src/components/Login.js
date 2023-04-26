import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { loginUser } from "../utils";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

const Login = ({ newUser }) => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("user", userName, "email", email, "pwd", password);
    await loginUser(userName, email, password, newUser);
  };

  return (
    <div className="loginForm">
      <h2>Login Below...</h2>
      <Form onSubmit={submitHandler}>
        <FloatingLabel
          controlId="floatingUserNameInput"
          label="User Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Enter User Name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></Form.Control>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingEmailInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Form.Control>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPasswordInput"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Form.Control>
        </FloatingLabel>
        <div className="formSubmit">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
