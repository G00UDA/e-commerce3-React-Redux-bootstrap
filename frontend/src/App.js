import Footer from "./components/Uitily/Footer";
import NavBarLogin from "./components/Uitily/NavBarLogin";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import AllBrandPage from "./pages/Brand/AllBrandPage";
import AllCategorys from "./pages/category/AllCategorys";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShopProductsPage from "./pages/products/ShopProductsPage";
function App() {
  return (
    <div className="text-center">
      <NavBarLogin/>
      <BrowserRouter>
      <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="register" element={<RegisterPage/>} />
      <Route path="allcategorys" element={<AllCategorys/>} />
      <Route path="allbrands" element={<AllBrandPage/>} />
      <Route path="products" element={<ShopProductsPage/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
