import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';
/*import AnimCursor from "./components/AnimCursor.jsx";*/

const  App = () => {
    return (
        <BrowserRouter>
            {/*<AnimCursor/>*/}
            <div className="relative z-0 bg-black">
                <div className="bg-hero-pattern bg-cover min-h-screen">
                    <div>
                        <StarsCanvas/>
                    </div>
                    <Navbar/>
                    <Hero/>
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
