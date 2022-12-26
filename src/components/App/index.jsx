import { Route, Routes } from 'react-router-dom';
import CategoriesPage from '../../pages/CategoriesPage';
import HomePage from '../../pages/HomePage';
import Layout from '../Layout';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path='categories_page' element={<CategoriesPage/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
