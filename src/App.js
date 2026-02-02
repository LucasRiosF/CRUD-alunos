import './App.css';
import Home from './pages/Home';
import Alunos from './pages/Alunos';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import Menu from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alunos" element={<Alunos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;