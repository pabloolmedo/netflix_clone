
import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';

function App() {
  return (
    <div className="App">
      {/* Banner */}
      <Banner />

      {/* Movie Rows */}
      <Row title="Trending now" type="movie" />
      <Row title="Bingewhorty TV Shows" type="series" />
      <Row title="Comedies" type="movie" />
      <Row title="Thriller Movies" type="movie" />
      <Row title="Action Thrillers" type="movie" />
      <Row title="Continue watching for Pablo" type="movie" />
      <Row title="Popular on Netflix" type="movie" />
      <Row title="Sci-Fi & Fantasy" type="movie" />

    </div>
  );
}

export default App;
