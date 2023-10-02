import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works} from './components'


function App() {

  return (
       <div>
           <div>
               <Navbar/>
               <Hero/>
           </div>
           <About/>
           <Experience/>
           <Tech/>
           <Works/>
           <Feedbacks/>
           <div>
               <Contact/>

           </div>
       </div>
  )
}

export default App
