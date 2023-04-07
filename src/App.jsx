import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import { useUsersState } from "./Context/Context";

function App() {
  const {themeState} = useUsersState()

  return (
      <div className="App" style={{backgroundColor: themeState.bgColor, color: themeState.color}}>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/dentist/:id' element={<Detail/>}/>
            <Route path='/favs' element={<Favs/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
