import React, { FC, FormEvent, useState, ChangeEvent } from "react";
import Header from "./header";
import { Container, Button, Form } from "react-bootstrap";
import './permissions.css';
const PermissionsPage:FC = () =>{ 

  return(
    <div>
    <Header />
    
    <Form>
      <Container className="mt-xl-5 d-flex justify-content-center ">
      <Button className="choose-button">Выбрать пользователя</Button>
      </Container>
    </Form>

    <Form className="">
   
    <Container className=" d-flex align-items-center justify-content-center">
      
      <div className="form">

      <div className="item d-flex justify-content-between">
        <div>Таблица поступающих</div>
        <Form.Check  
        name="group1"
        />
      </div>

      <div className="item d-flex justify-content-between">
        <div>Таблица баллов ЕГЭ</div>
        <Form.Check  
        name="group1"
        />
      </div>
     


      </div>

      <div className="d-flex flex-column" style={{width: '10%'}}>
      <Button className="arrow-button"> <img src="../../img/arrow-right.svg" alt="" /></Button>
      <Button className="arrow-button"> <img src="../../img/arrow-left.svg"  alt="" /></Button>
      </div>

      <div className="form">


      <div className="item d-flex justify-content-between">
        <div>Таблица преподавателей</div>
        <Form.Check  
        name="group1"
        />
      </div>

      <div className="item d-flex justify-content-between">
        <div>Таблица результатов за 2023г.</div>
        <Form.Check  
        name="group1"
        />
      </div>

      <div className="item d-flex justify-content-between">
        <div>Таблица поступивших за 2023г. </div>
        <Form.Check  
        name="group1"
        />
      </div>




      </div>
      
      
    </Container>
    
    </Form>
    
    
    </div>
  )
}

export default PermissionsPage;
