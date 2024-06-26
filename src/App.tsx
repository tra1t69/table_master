import React, {FC} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTablePage from './components/pages/createTable';
import CreateUserPage from './components/pages/createUser';
import TableRedactorPage from './components/pages/tableRedactor';
import DownloadPage from './components/pages/download';
import PermissionsPage from './components/pages/permissions';
import LoginPage from './components/pages/login';
const App:FC = () =>{
  return (
    
    <div>
      <TableRedactorPage />
    </div>
  );
}

export default App;
