import { Route, Routes } from 'react-router-dom';
import CategoriesPage from '../../pages/CategoriesPage';
import HomePage from '../../pages/HomePage';
import ProductsPage from '../../pages/ProductsPage';
import Layout from '../Layout';
import NotFoundPage from '../../pages/NotFoundPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='categories_page' element={<CategoriesPage />} />
          <Route path='categories_page/:category' element={<ProductsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
