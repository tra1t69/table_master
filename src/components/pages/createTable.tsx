import React, { FC, FormEvent, useState, ChangeEvent } from "react";
import Header from "./header";
import { Form, Button, Container } from "react-bootstrap";
import './createTable.css'
import { isNumberObject } from "util/types";





const CreateTablePage:FC = () =>{
  const[tableName, setTableName] = useState('');
  const[column, setColumn] = useState('');
  const[row, setRow] = useState('');

  const OnTableName = (e: ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
    setTableName(e.target.value);
  }

  const OnColumn = (e: ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
    setColumn(e.target.value);
  }

  const onRow = (e: ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
    setRow(e.target.value);
  }



  const onSubmit  = (e: FormEvent) => {
    e.preventDefault();
    if(isFinite(Number(row)) === false || isFinite(Number(column)) === false || row.trim() === "" || column.trim() === "")
      {
        console.log("Ошибка")
      }
  }


  return(
    <div>
    <Header />
    <Container className="mt-5" >
    <Form  onSubmit={onSubmit} className="form d-flex flex-column justify-content-center">
    <Form.Group className="mb-2">
      <Form.Label>Задайте название таблицы</Form.Label>
      <Form.Control
      type="text"
      name="table-name"
      id="table-name"
      onChange={OnTableName}
      />
    </Form.Group>
    <Form.Group className="mb-2">
      <Form.Label>Укажите количество колонок</Form.Label>
      <Form.Control
      type="text"
      name="column"
      id="column"
      onChange={OnColumn}
      />
    </Form.Group>
    <Form.Group className="mb-2">
      <Form.Label>Укажите количество строк</Form.Label>
      <Form.Control
      type="text"
      name="row"
      id="row"
      onChange={onRow}
      />
    </Form.Group>
    <Button className="form-button" type="submit">Создать</Button>
    </Form>
    </Container>
    </div>
    
  )
}



export default CreateTablePage;