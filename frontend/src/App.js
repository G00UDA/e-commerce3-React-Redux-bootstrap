import Footer from "./components/Uitily/Footer";
import NavBarLogin from "./components/Uitily/NavBarLogin";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import AllBrandPage from "./pages/Brand/AllBrandPage";
import AllCategorys from "./pages/category/AllCategorys";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShopProductsPage from "./pages/products/ShopProductsPage";
import ProductsDetails from "./pages/products/ProductsDetailsPage";
import CartPage from "./pages/cart/CartPage";
import ChoosePayMethod from "./pages/checkout/ChoosePayMethod";
import AdminallproductPage from "./pages/Admin/AdminallproductPage";
import AdminAllOrders from "./pages/Admin/AdminAllOrders";
import AdminOrderDetailsPage from "./pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "./pages/Admin/AdminAddProductPage";
import UserAllOrdersPage from "./pages/User/UserAllOrdersPage";
import UserFavoriteProductPage from "./pages/User/UserFavoriteProductPage";
import UserAllAddressPage from "./pages/User/UserAllAddressPage";
import UserAddAddressPage from "./pages/User/UserAddAddressPage";
import UserEditAddressPage from "./pages/User/UserEditAddress";
import UserProfilePage from "./pages/User/UserProfilePage";

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
      <Route path="products:id" element={<ProductsDetails/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/order/paymethoud" element={<ChoosePayMethod/>} />
      <Route path="/admin/allproducts" element={<AdminallproductPage/>} />
      <Route path="/admin/allorders" element={<AdminAllOrders/>} />
      <Route path="admin/orders/23" element={<AdminOrderDetailsPage/>} />
      <Route path="admin/addbrand" element={<AdminAddBrandPage/>} />
      <Route path="admin/addcategory" element={<AdminAddCategoryPage/>} />
      <Route path="admin/addsubcategory" element={<AdminAddSubCategoryPage/>} />
      <Route path="admin/addproduct" element={<AdminAddProductPage/>} />
      <Route path="user/allorders" element={<UserAllOrdersPage/>} />
      <Route path="user/favoriteproducts" element={<UserFavoriteProductPage/>} />
      <Route path="user/addresses" element={<UserAllAddressPage/>} />
      <Route path="user/add-address" element={<UserAddAddressPage/>} />
      <Route path="user/edit-address" element={<UserEditAddressPage/>} />
      <Route path="user/profile" element={<UserProfilePage/>} />
      
      

      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
