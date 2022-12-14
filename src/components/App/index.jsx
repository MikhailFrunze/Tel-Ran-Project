import {Route, Routes} from 'react-router-dom';
//import MainPage from '../../pages/MainPage';
import { Context } from '../../context'
import HomePage from '../../pages/HomePage';

function App() {
  return (
    <div className="App">
      <Context.Provider >
      <Routes>
      <Route path='/' element={<HomePage />}></Route>
      </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
