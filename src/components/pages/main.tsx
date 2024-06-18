import React, { FC, ChangeEvent, FormEvent, useState } from 'react';
import { Navbar, Nav, NavDropdown, Col, Button, Row, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './main.css';
const MainPage:FC =()=>{
  
  return(
    <Container> 
    <Navbar variant="pills" bg='dark' className='nav' >
      <NavDropdown title="Меню" id="nav-dropdown" className='list_title'>
        <NavDropdown.Item eventKey="1">Редактировать таблицу</NavDropdown.Item>
        <NavDropdown.Item eventKey="2">Загрузить таблицу</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="3">Помощь</NavDropdown.Item>
      </NavDropdown>
      <Form className='d-flex flex-row col-7 offset-2'>
          <Form.Control
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button className='' type="submit">Поиск</Button>
      </Form>
      <Button type="submit" className="ms-lg-auto">Выход</Button>
    </Navbar>
    </Container>
  )
}

export default MainPage;