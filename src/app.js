import Navbar from "./Navbar.jsx"
import Plp from "./Pages/plp.js"
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Pdp from "./pdpdetail.js";
import Team from "./teamdetails.js";
import Footer from "./footer.js";

function App (){
   
    return(
        <>   
        
       <Router>
       <Navbar head="Parag's Photos Shop" />
    <Routes>
        <Route path='/plp' element={<Plp/>} />
        <Route path='/pdp' element={<Pdp/>} />
        <Route path='/team' element={<Team/>} />
   
    </Routes>
    <Footer/>
    </Router>
               
        </>
    );
}

export default App