import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header></Header>
        <Nav></Nav>
        <Main></Main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
