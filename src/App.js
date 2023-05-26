
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity='Rome'/>
      <footer>
        This project was created by{' '}
        <a
          href="https://www.shecodes.io/graduates/64804-evgeniia-korolova"
          target="_blank"
          rel="noreferrer"
        >
          Evgeniia Korolova
        </a>{' '}
        and is{' '}
        <a
          href="https://github.com/evgeniia-korolova/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open sourced on GitHub
        </a>
      </footer>
      </div>
    </div>
  )
}

export default App;
