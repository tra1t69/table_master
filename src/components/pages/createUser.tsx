import React, { FC, FormEvent, useState, ChangeEvent } from "react";
import Header from "./header";
import { Form, Button, Container } from "react-bootstrap";
import './createUser.css'
const CreateUserPage:FC = () =>{ 
  const[userName, setUserName] = useState('');
  const[password, setPassword] = useState('');

  const onSubmit  = (e: FormEvent) => {
    e.preventDefault();
  }
  const onUserName = (e: ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
    setUserName(e.target.value);
  }

  const onPassword = (e: ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
    setPassword(e.target.value);
  }

  return(
    <div>
    <Header />
    <Container className="mt-5">
    <Form onSubmit={onSubmit}  className="form d-flex flex-column justify-content-center">
    <Form.Group className="mb-2">
      <Form.Label>Введите логин будущего пользователя</Form.Label>
      <Form.Control
      type="text"
      name="table-name"
      id="table-name"
      onChange={onUserName}
      />
    </Form.Group>
    <Form.Group className="mb-2">
      <Form.Label>Введите пароль будущего пользователя</Form.Label>
      <Form.Control
      type="text"
      name="column"
      id="column"
      onChange={onPassword}
      />
    </Form.Group>
    <Button type="submit">Создать</Button>
    </Form>
    </Container>
    </div>
  )
}

export default CreateUserPage;