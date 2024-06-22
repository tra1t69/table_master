import React, { FC, ChangeEvent, FormEvent, useState } from 'react';
import { Navbar, Nav, NavDropdown, Col, Button, Row, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css';
const Header:FC =()=>{
  const onSubmit  = (e: FormEvent) => {
    e.preventDefault();
  }

  return(
    
    <Navbar onSubmit={onSubmit} className='navbar' >
      <Container> 
      <NavDropdown title={<span className='navDropdown'>Меню</span>} id="nav-dropdown" >
        <NavDropdown.Item eventKey="1">Редактировать таблицу</NavDropdown.Item>
        <NavDropdown.Item eventKey="2">Загрузить таблицу</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="3">Настройки</NavDropdown.Item>
        <NavDropdown.Item eventKey="4">Помощь</NavDropdown.Item>
      </NavDropdown>
      <Form className='d-flex flex-row col-7 offset-2'>
          <Form.Control
            type="text"
            placeholder="Введите требуемый запрос"
            className="mr-sm-2"
          />
          <Button className='ms-2' type="submit">Поиск</Button>
      </Form>
      <Button type="submit" className="ms-lg-auto me-lg-2">Выход</Button>
      </Container>
    </Navbar>
    
  )
}

export default Header;