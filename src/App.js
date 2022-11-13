// Routes
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "store";

// Pages
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Acceder from 'containers/pages/Acceder';
import Portfolio from "containers/pages/Portfolio";
import Project from "containers/pages/Project";
import Search from "containers/pages/Search";
import Contact from "containers/pages/Contact";
import Housing from "containers/models/Housing";


function App() {
  return (
    <Provider store={store}>
   <Router>
    <Routes>

    {/* Error 404 */}
    <Route path='*' element={<Error404/>}/>

    {/* Home */}
    <Route path='/' element={<Home/>} />

    {/* Acceder */}
    <Route path="/acceder" element={<Acceder/>} />

    {/* Portfolio */}
    <Route path="/portfolio" element={<Portfolio/>} />

    {/* Proyecto Portfolio */}
    <Route path="/project/:slug" element={<Project/>} />

      {/* Search */}
    <Route path='/search/:term' element={<Search/>} />

      {/* Contact */}
      <Route path='/contact' element={<Contact/>} /> 

      {/* Models */}
      <Route path='/mendoza-housing' element={<Housing/>} /> 


    </Routes>
   </Router>
    </Provider>
  );
}

export default App;
