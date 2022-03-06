import './App.css';
import Weather from './components/Weather.js'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
    <Navbar/>
      <Weather/>
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
