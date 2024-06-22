import React, {FC} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTablePage from './components/pages/createTable';
import CreateUserPage from './components/pages/createUser';
import TableRedactorPage from './components/pages/tableRedactor';
import DownloadPage from './components/pages/download';
const App:FC = () =>{
  return (
    
    <div>
      <TableRedactorPage />
      <CreateUserPage/>
      <CreateTablePage/>
      <DownloadPage />
    </div>
  );
}

export default App;
