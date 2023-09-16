
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';

function App() {
  return (
   <>
  
   <Navbar title="Titlebar" home="home2"/>
   <div className='container'>
   {/* <Navbar/> */}
   <TextForm heading="Enter the text to convert upper case"/>
   </div>
   </>
  );
}

export default App;
