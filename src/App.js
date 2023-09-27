
import About from './About';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';

function App() {
  return (
   <>
   <Navbar title="Titlebar" home="home2"/>
   <div className='container'>
    <Navbar/> 
   <TextForm heading="Enter the text to convert upper case"/> 
  <About ></About> 
   </div>
   </>
  );
}

export default App;
