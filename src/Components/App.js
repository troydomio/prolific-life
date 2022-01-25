import '../App.css';
import Nav from './Navbar/Nav';
import Header from './Header/Header'
import Services from './Services/Services';
import Testimony from './Testimony/Testimony';
import About from './About/About';

function App() {
  return (
    <div>
     <Nav/>
     <Header/>
     <Services/>
     <Testimony/>
     <About/>
    </div>
  );
}

export default App;
