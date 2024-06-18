import React, {FC} from 'react';
import './App.css';
import LoginPage from './components/pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/pages/main';

const App:FC = () =>{
  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;
