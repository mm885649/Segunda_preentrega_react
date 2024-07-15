import React from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} /> 
          <Route path="/categorias/:categoryId" element={<ItemListContainer />}/>
          <Route path="/producto/:productId" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes> 

        <Footer /> 
      </BrowserRouter> 
    </ChakraProvider>
  );
}

export default App;
