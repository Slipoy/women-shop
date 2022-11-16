
import './App.css'
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
        <main>
            <Header/>
            <HomePage/>
            <div className="semicircle"></div>
        </main>
    </div>
  );
}

export default App;
