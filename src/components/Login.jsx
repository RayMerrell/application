import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const login = ({newUser}) => {
    const [userName, setUserName]=useState();
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    

    const submitHandler = ()=>{
        return 0;
    }
  return (
    <>
        <h2>Login Below...</h2>
        <Form onSubmit={submitHandler}>
            <Form.Label>User Name</Form.Label>
            <Form.Control></Form.Control>
            <Form.Label>Email</Form.Label>
            <Form.Control></Form.Control>
            <Form.Label>Password</Form.Label>
            <Form.Control></Form.Control>
        </Form>
    </>
  )
}

export default login