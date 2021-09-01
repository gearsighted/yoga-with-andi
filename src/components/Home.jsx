import Navbar from "./Navbar";
import Hero from "./Hero";
import Carousel from "./Carousel";
import About from "./About";
import Footer from "./Footer";
import "../index.css";


const Home = (props) => {
    return(
        <div>
        <Hero />
        <Carousel classes={props.classes}/>
        <About />
        <Footer />
        </div> 
    )
}

export default Home;