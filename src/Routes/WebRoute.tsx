import { Route, Routes } from "react-router-dom";
import About from "../View/About";
import Contact from "../View/Contact";
import ErrorPage from "../View/ErrorPage";
import Home from "../View/Home";
import Projects from "../View/Projects";
import Resume from "../View/Resume";


const WebRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/project' element={<Projects />}  />
        <Route path='/about' element={<About />}  />
        <Route path='/contact' element={<Contact />}  />
        <Route path='/resume' element={<Resume />}  />
        <Route path='/*' element={<ErrorPage />}  />
    </Routes>
  )
}

export default WebRoute