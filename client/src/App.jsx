import React from 'react';
import Overview from './components/pages/OverviewPage';
import Upload from './components/pages/UploadPage';
import Login from './components/pages/LoginPage';
import Cadastro from './components/pages/CadastroPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path="/home" element={<Overview/>}/>
        <Route path="/upload" element={<Upload/>}/>
      </Routes>
    </Router>
  )
}

export default App;