import Footer from "./components/Footer"
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Aboutme from "./components/Aboutme";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="bg-[#f6f4ef]">
            <Navbar/>
            <Banner/>
            <Aboutme/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App