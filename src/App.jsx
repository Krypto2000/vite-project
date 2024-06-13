import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import { Nav } from './component/nav/Nav';
import Scrolldown from './component/Scrolldown/Scrolldown';
import Coin from './component/coin/Coin';
import About from './component/About/About';
import Coinroute from './component/routes/Coinroute';
import Feature from './component/featured/Feature';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coin/:id" element={<Coinroute/>} />
      </Routes>
    </Router>
  );  
}

// Home component combining the existing components
const Home = () => (
  <>
    <Feature />
    <Scrolldown />
    <Coin />
    
  </>
);

export default App;
