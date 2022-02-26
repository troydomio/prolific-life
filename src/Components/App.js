import '../App.css';
import Nav from './Navbar/Nav';
import Header from './Header/Header'
import Services from './Services/Services';
import Testimony from './Testimony/Testimony';
import About from './About/About';
import Work from './Worksamples/Work';
import Contact from './Contact/contact';

function App() {
  return (
    <div>
     <Nav/>
     <Header/>
      <Services/> 
     {/* <About/>
     <Testimony/>
     <Work/>
    <Contact/>  */}
    </div>
  );
}

export default App;
