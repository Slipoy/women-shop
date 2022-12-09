
import './App.css'
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import FormInvitation from "./components/FormInvitation/formInvitation";
import Footer from "./components/footer/footer";
import CatalogPage from "./components/Catalog/Catalog";
import ItemPage from "./components/itemPage/itemPage";
import Basket from "./components/Basket/basket";



function App() {
  return (
          <div className="App">
              <main>
                  <Header/>
                  <Routes>
                      <Route path='women-shop/' element={<HomePage/>}/>
                      <Route path="women-shop/catalog/:products/" element={<CatalogPage/>}/>
                      <Route path="women-shop/catalog/:products/:subcategory/*" element={<CatalogPage/>}/>
                      <Route path='women-shop/product/:itemId' element={<ItemPage/>}/>
                      <Route path='women-shop/basket' element={<Basket/>}/>
                  </Routes>
              </main>
              <Routes>
                  <Route path='women-shop/' element={<>
                      <FormInvitation/>
                      <Footer/>
                  </>}/>

              </Routes>

          </div>
  );
}

export default App;
