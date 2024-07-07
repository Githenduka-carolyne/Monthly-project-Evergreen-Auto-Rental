import Header from "./components/Header/Header"
import "../src/components/Header/header.css"
import "../src/assets/global.css"
import "../src/pages/Dashboard/dashboard.css"
import "../src/components/Footer/footer.css"
import "../src/pages/Services/services.css"
import Dashboard from "./pages/Dashboard/Dashboard.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Signin from "./pages/Signin/Signin.jsx"
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import Services from "./pages/Services/Services.jsx";
import Typeofcars from "./pages/Typeofcars/Typeofcars.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import { BrowserRouter ,Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Typeofcars" element={<Typeofcars />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App
