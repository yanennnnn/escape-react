import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Products from './pages/Products';
import ProductDetail from "./pages/ProductDetail";

function App() {
  
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route path="article" />
        <Route path="article/:articleId" />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
