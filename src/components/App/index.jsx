import { Route, Routes } from 'react-router-dom';
import CategoriesPage from '../../pages/CategoriesPage';
import HomePage from '../../pages/HomePage';
import ProductsPage from '../../pages/ProductsPage';
import Layout from '../Layout';
import NotFoundPage from '../../pages/NotFoundPage';
import ProductDescriptionPage from '../../pages/ProductDescriptionPage';
import CartPage from '../../pages/CartPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='categories_page' element={<CategoriesPage />} />
          <Route path='categories_page/:category' element={<ProductsPage />} />
          <Route path='products/:id' element={<ProductDescriptionPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
