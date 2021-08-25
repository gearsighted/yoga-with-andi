import './index.css';
import Hero from './components/Hero';
import About from './components/About';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Carousel/>
      <About/>
    </div>
  );
}

export default App;
