import { React } from 'react';
import './styles/App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FormPage from './pages/FormPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <HeaderWrapper />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function HeaderWrapper() {
  const location = useLocation();

  return <Header page={location.pathname} />;
}

export default App;
