import { Route, Routes } from 'react-router-dom';
import { Context } from '../../context'
import HomePage from '../../pages/HomePage';
import Layout from '../Layout';

function App() {
  return (
    <div className="App">
      <Context.Provider >
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />}></Route>
          </Route>
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
