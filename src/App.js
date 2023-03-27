import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
import HomePage from './Component/HomePage/HomePage';
import TableBook from './Component/TableBooking/TableBook';
import AppBar from './Component/AppBar/AppBar';
import CategoryPage from './Component/Category/CategoryPage';
import ProductHome from './Component/Product/ProductHome';
import Cart from './Component/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/table" element={<TableBook/>}/>
          <Route path="/navbar" element={<AppBar/>}/>
          <Route path="/category" element={<CategoryPage/>}/>
          <Route path="/product" element={<ProductHome/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/foodOrder/" element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
