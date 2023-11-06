import './App.css';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Sponsors from './components/Sponsors';
import PopularProduct from './components/PopularProduct';
import Data from './components/Data';
import PerfectBeauty from './components/PerfectBeauty';
import Review from './components/Review';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Showcase/>
      <Sponsors/>
      <PopularProduct/>
      <Data/>
      <PerfectBeauty/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default App;
