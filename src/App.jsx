import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home.jsx";
import Contact from "./Routes/Contact.jsx";
import Detail from "./Routes/Detail.jsx";
import Favs from "./Routes/Favs.jsx";
import { routes } from "./Routes/routes.js";
import { useGlobalStates } from "./Context/Context.jsx";

function App() {
  const { themeState } = useGlobalStates();
  return (
    <div className={themeState.theme ? "dark" : "light"}>
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path="/dentista/:id" element={<Detail />} />
        <Route path={routes.favs} element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
