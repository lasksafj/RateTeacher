import logo from './logo.svg';
import './App.scss';
import Nav1 from './views/Nav/Nav1.js';
import 'bootstrap/dist/css/bootstrap.css';
import Body from './views/Body/Body'
import {Button} from 'react-bootstrap'
import Footer from './views/Footer/Footer.js'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Nav1 />
        <Body />
        
        <Footer />
      </header>
    </div>
  );
}

export default App;
