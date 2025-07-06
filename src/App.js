import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Stats from './pages/Stats';
import Layout from './components/Layout';
import InfoPage from './pages/InfoPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Outlet /></Layout>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="stats" element={<Stats />}>
            <Route path=":slug" element={<InfoPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
