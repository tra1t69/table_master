import React, { FC, FormEvent, useState, ChangeEvent } from "react";
import Header from "./header";
import { Container, InputGroup, Form, Button } from "react-bootstrap";
import './download.css'
import { cp } from "fs";
const DownloadPage:FC = () =>{ 

  return(
    <div>
    <Header />
    <Container className="mt-xl-5 d-flex flex-column">
    <InputGroup size="sm" className="mb-3">
        <Form.Control
        placeholder="Введите название таблицы"
        />
    </InputGroup>
    <Form className="list-tables">
      <div className="item d-flex flex-row align-items-center justify-content-between">
      <div className="">Таблица поступающих 2024г</div>
      <Form.Check  
            name="group1"
          />
      </div>
      <div className="item d-flex flex-row align-items-center justify-content-between">
      <div className="">Таблица ведомостей</div>
      <Form.Check
            name="group2"
          />
      </div>
      <div className="item d-flex flex-row align-items-center justify-content-between">
      <div className="">Таблица результатов</div>
      <Form.Check
            name="group3"
          />
      </div>
    </Form>
    <Button className="ml-auto button">Загрузить</Button>
    </Container>
    </div>
  )
}

export default DownloadPage;