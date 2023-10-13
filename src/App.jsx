import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';

const  App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-black">
                <div className="bg-hero-pattern bg-cover min-h-screen">
                    <Navbar/>
                    <Hero/>
                    <div className="">
                        <StarsCanvas/>
                    </div>

                </div>
                <About/>
                <Experience/>
                <Tech/>
                <Works/>
                <Feedbacks/>
                <div className="relative z-0">
                    <Contact/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
