import React, {FC} from 'react';
import './App.css';
import LoginPage from './components/pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTablePage from './components/pages/createTable';

const App:FC = () =>{
  return (
    <div>
      <CreateTablePage />
    </div>
  );
}

export default App;
