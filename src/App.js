import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navbar/Nav';
import News1 from './Components/News1/News1';
import FavCards from './Components/FavCards/FavCards';
import TechComponent from './Components/TechComponent/TechComponent';
import Footer from './Components/Footer/Footer';
import TopAdd from './Components/TopAdd/TopAdd';
import TechComonent2 from './Components/TechComponent/TechComonent2';


function App() {


  return (
    <>
      <Nav/>
      <TopAdd/>
      <News1/>
      <FavCards/>
      <TechComponent/>
      <TechComonent2/>
      <Footer/>

    </>
  );
}

export default App;
