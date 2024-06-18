import React, {FC} from 'react';
import './App.css';
import LoginPage from './components/pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTablePage from './components/pages/createTable';
import CreateUserPage from './components/pages/createUser';

const App:FC = () =>{
  return (
    <div>
      <CreateUserPage />
    </div>
  );
}

export default App;
