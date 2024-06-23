import React, { FC, FormEvent, useState, ChangeEvent } from "react";
import { Button, Container } from "react-bootstrap";
import Header from "./header";
import './tableRedacror.css';
const TableRedactorPage:FC = () =>{ 


const AddLocalTitle = () =>{
  console.log()
}
  return(
    <div>
    <Header />
    <Container className="mt-xl-5">
    <div className="d-flex flex-column redactor-buttons">
    <div className="d-flex justify-content-center">
    <Button  className="choose-button" >
    Выбрать таблицу
    </Button>
      </div>
    <div className="d-flex justify-content-center">
    <Button  className="redactor-button" >
    Добавить строку
    </Button>
    
    <Button  className="redactor-button" > 
    Добавить колонку
    </Button>
    
    <Button onClick={AddLocalTitle} className="redactor-button">
    Добавить локальный заголовок
    </Button>
    
    <Button className="redactor-button">
    Добавить подраздел
    </Button>
    </div>
    <div className="d-flex justify-content-center">
    <Button className="redactor-button">
    Удалить строку
    </Button>
    
    <Button className="redactor-button">
    Удалить колонку
    </Button>
    
    <Button className="redactor-button">
    Удалить локальный заголовок
    </Button>
    
    <Button className="redactor-button">
    Удалить подраздел
    </Button>
    </div>
    <div className="d-flex justify-content-center">
    <Button className="redactor-button">
    Добавить/удалить боковик
    </Button>
    
    <Button className="redactor-button">
    Объединить ячейки
    </Button>
    
    <Button className="redactor-button">
    Разделить ячейки
    </Button>
    
    <Button className="redactor-button">
    Добавление текста
    </Button>
    </div>
    </div>

    {/* rowSpan colSpan */}




    </Container>
    </div>
  )
}

export default TableRedactorPage;


