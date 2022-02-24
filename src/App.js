import './App.css';
import About from './components/about/About';
import Academics from './components/academics/Academics';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Utility from './components/utility/Utility';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Academics/>
      <Utility/>
      <Footer/>
    </div>
  );
}

export default App;
