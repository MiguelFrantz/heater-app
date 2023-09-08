import './App.css';
import { HeaterTemperature } from './pages/heater-temperature';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Heater target temperature
        </h1>
      </header>
      <HeaterTemperature />
    </div>
  );
}

export default App;
