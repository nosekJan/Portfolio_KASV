import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';
import {useEffect, useState} from "react";
import ClipLoader from "react-spinners/CircleLoader";

const  App = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }, []);

    return (
        <BrowserRouter>

            {
                loading?
                    <ClipLoader
                        className="bg-black min-h-screen min-w-full justify-center items-center flex"
                        color={"#6D28D9"}
                        loading={loading}
                        size={250}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    /> :
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
            }
        </BrowserRouter>
    )
}

export default App
