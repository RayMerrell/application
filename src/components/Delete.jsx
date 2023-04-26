import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { deleteUser } from "../utils";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

const Delete = () => {
  const [numDeleted, setNumDeleted] = useState();
  const [userName, setUserName] = useState();
  const submitHandler = async (e) => {
    e.preventDefault();
    let result = await deleteUser(userName);
    document.getElementById("deletedResult").style.display = "block";
    console.log("Result", result);
    setNumDeleted(result.result);
  };

  return (
    <div className="loginForm">
      <h2>Enter user to delete</h2>
      <Form onSubmit={submitHandler}>
        <FloatingLabel
          controlId="deleteUserNameInput"
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
        <div className="formSubmit">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      <h2 className="deletedResult" id="deletedResult">
        {numDeleted} records have been deleted
      </h2>
    </div>
  );
};

export default Delete;
