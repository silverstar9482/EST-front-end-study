import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './../pages/Header.jsx';
import Shop from './../pages/Shop.jsx';
import Cart from './../pages/Cart.jsx';
import './reset.css';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
