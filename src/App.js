
import './App.css';
import Row from './components/Row';

function App() {
  return (
    <div className="App">

      {/* Movie Rows */}
      <Row title="Trending now" type="movie" />
      <Row title="Bingewhorty TV Shows" type="series" />

    </div>
  );
}

export default App;
