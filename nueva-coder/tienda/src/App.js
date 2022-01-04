
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Cart from './components/Cart';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/category/:id" element={<ItemListContainer/>} />
        <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
        <Route exact path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
}

export default App;
