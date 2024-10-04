import React from 'react';
import Overview from './components/OverviewPage';
import Upload from './components/UploadPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overview/>}/>
        <Route path="/upload" element={<Upload/>}/>
      </Routes>
    </Router>
  )
}

export default App