import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import PieChart from './Components/PieChart';


function App() {
  return (
    <div className='flex flex-col lg:flex-row'>
      {/* <Navbar />
      <Hero /> */}
      <PieChart />
    </div>
  );
}

export default App;
