import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

function App() {
  return (
    <BrowserRouter> 
      <Navbar/>
      <Container customClass='minHeight'>
        <Routes>
          <Route path= "/" element={<Home/>}/> 
          <Route path="/home" element={<Home/>}/>
          <Route path= "/company" element={<Company/>}/> 
          <Route path= "/contact" element={<Contact/>}/> 
          <Route path='/projects' element={<Projects/>}/> 
          <Route path='/newProject' element={<NewProject/>}/>
        </Routes>
      </Container>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
