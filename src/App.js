import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { AllRouter } from './Components/AllRouter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRouter/>
    </div>
  );
}

export default App;
