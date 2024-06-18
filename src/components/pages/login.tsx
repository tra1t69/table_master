import React, { FC, ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './login.css';
const LoginPage: FC = () => {
  const[login, setLogin] = useState('');
  const[password, setPassword] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (login === log && password === pass) {
      console.log('Успех');
    } else {
      console.log('Провал');
    }
  }


  const OnLogin = (e: ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
    setLogin(e.target.value);
  }
  const onPassword = (e: ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
    setPassword(e.target.value);
  }

  const log = 'log';
  const pass = 'pas';



  return(
    <div className="container">
      <Form className="login-form" onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Логин</Form.Label>
          <Form.Control
            onChange={OnLogin}
            type="text"
            placeholder="Введите логин"
            name="login"
            id="login"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            onChange={onPassword}
            type="text"
            placeholder="Введите пароль"
            name="password"
            id="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Войти
        </Button>
      </Form>
    </div>
  )
}

export default LoginPage;