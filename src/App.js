
import './App.css'
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import FormInvitation from "./components/FormInvitation/formInvitation";
import Footer from "./components/footer/footer";
import CatalogPage from "./components/Catalog/Catalog";



function App() {
  return (
          <div className="App">
              <main>
                  <Header/>
                  <Routes>
                      <Route path='women-shop/' element={<HomePage/>}/>
                      <Route path="women-shop/:products/" element={<CatalogPage/>}/>
                      <Route path="women-shop/:products/:subcategory/*" element={<CatalogPage/>}/>
                  </Routes>
              </main>
              <FormInvitation/>
              <Footer/>
          </div>
  );
}

export default App;
