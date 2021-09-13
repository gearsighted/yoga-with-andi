import './index.css';
import Hero from './components/Hero';
import About from './components/About';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';


let yogaClasses = [
  {
    name: 'Vinyasa Flow',
    image: 'https://images.unsplash.com/photo-1598296885460-5db81b1e33b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1',
    altImage: 'Woman doing yoga',
    description: 'This class includes Sun Salutations and emphasis on breath-linked movement. I will design it to fit your individual needs with poses chosen to help you achieve your personal yoga and fitness goals.',
    time: '60 or 75 minute class options',
    id: uuidv4(),
  },
  {
    name: 'Vinyasa and Yin Restorative',
    image: 'https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    altImage: 'Woman doing yoga',
    description: 'This class begins with a personalized Vinyasa flow sequence , followed by 30 minutes of Yin and Restorative. This class both rejuvenates and relaxes the body while helping to cultivate a physical and meditative practice.',
    time: '60 or 90 minute class options',
    id: uuidv4()
  },
  {
    name:'Restorative Yoga',
    image:'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    altImage: 'Woman doing yoga',
    description:`Restorative Yoga is a relaxing, meditative class that helps relieve mental and physical stress/tension. The mind and body relax while you slowly move through restful poses that are held for several minutes at a time supported by lots
    of comfy props.`,
    time:'60 or 75 minute class options',
    id: uuidv4()
  }
]

function App() {
  return (
    <div className="App">
      <Hero/>
      <Carousel classes={yogaClasses}/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
