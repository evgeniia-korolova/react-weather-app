
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Rome" />
        <footer>
          This project was created by{' '}
          <a
            href="https://www.shecodes.io/graduates/64804-evgeniia-korolova"
            target="_blank"
            rel="noopener noreferrer"
          >
            Evgeniia Korolova
          </a>{' '}
          and is{' '}
          <a
            href="https://github.com/evgeniia-korolova/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced on GitHub{' '}
          </a>
          and{' '}
          <a
            href="https://glittering-toffee-091761.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify{' '}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
