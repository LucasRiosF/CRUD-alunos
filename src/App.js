import './App.css';
import Home from './components/Home';
import Alunos from './components/Alunos';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <h1>CRUD</h1>
    <BrowserRouter>

    <Nav variant='tabs'>
      <Nav.Link as={Link} to={"/"}>Página inicial</Nav.Link>
      <Nav.Link as={Link} to={"/Alunos"}>Página de Alunos</Nav.Link>
    </Nav>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/alunos' element={<Alunos/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
