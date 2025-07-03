import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Stats from './pages/Stats';
import Layout from './components/Layout';
import './App.css';

const ReactInfo = () => (
  <div>
    <h3>React Information</h3>
    <p>React is a popular JavaScript library for building user interfaces, maintained by Meta and a community of individual developers and companies.</p>
    <p>It is known for its component-based architecture, which allows developers to create reusable UI components, and its use of a virtual DOM, which can improve performance.</p>
  </div>
);

const NotImplemented = () => <h2>Not implemented yet</h2>;

function App() {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Outlet /></Layout>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="stats" element={<Stats />}>
            <Route path="react" element={<ReactInfo />} />
            <Route path="*" element={<NotImplemented />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
