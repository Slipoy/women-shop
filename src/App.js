
import './App.css'
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FormInvitation from "./components/FormInvitation/formInvitation";
import Footer from "./components/footer/footer";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <main>
                  <Header/>
                  <HomePage/>
                  <div className="semicircle"></div>
              </main>
              <FormInvitation/>
              <Footer/>
          </div>
      </BrowserRouter>

  );
}

export default App;
