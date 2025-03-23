import { createRoot } from 'react-dom/client'
import './styles/main.css';
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Layout/Products.jsx';
import ProductDetail from './components/Pages/ProductDetail.jsx';
import CategoryProvider from './context/CategoryProvider.jsx';
import CardListProvider from './context/CardListProvider.jsx';
import Carts from './components/Pages/Carts.jsx';
import Login from './components/Pages/Login.jsx';
import IsAuthProvider from './context/IsAuth.jsx';

createRoot(document.getElementById('root')).render(

  <CardListProvider>
  <CategoryProvider>
  <IsAuthProvider>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
          <Route index element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product-detail/:id' element={<ProductDetail />} />
          <Route path='/carts' element={<Carts />} />
          <Route path="*" element={<h2>Not Page</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </IsAuthProvider>
  </CategoryProvider>
  </CardListProvider>
)
