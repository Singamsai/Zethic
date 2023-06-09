
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './pages/footer/Footer';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
import Page3 from './pages/page3/Page3';
import Page4 from './pages/page4/Page4';
import Page5 from './pages/page5/Page5';
import Page6 from './pages/page6/Page6';
import Page7 from './pages/page7/Page7';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
      <Footer/>
    </div>
  );
}

export default App;
