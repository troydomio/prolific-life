import '../App.css';
import Nav from './Navbar/Nav';
import Header from './Header/Header'
import Services from './Services/Services';
import Testimony from './Testimony/Testimony';
import About from './About/About';
import Work from './Worksamples/Work';
import Contact from './Contact/contact';
import Parallax from './Parallax/Parallax'
import Footer from './Footer/Footer'

function App() {
  return (
    <div>
     <Nav/>
     <Header/>
      <Services/> 
      <Parallax/>
      <About/>
      <Work/>
     <Testimony/>
    
    <Contact/>  
    <Footer/>
    </div>
  );
}

export default App;
