import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Entete from './components/Entete';
import ProductCart from './components/ProductCart';
import ProductList from './components/ProductList';
import { useState } from 'react';
import AddList from './components/AddList';
import { products } from './Data';
import AdminCartList from './components/AdminCartList';
import AdminAddProduct from './components/AdminAddProd';

function App() {
  const [prod, setProd] = useState(products);
  const [search, setSearch] = useState("")
  //*************************************//
const handleSearch = (e) => {
setSearch(e.target.value);
}
const handleDelete = (prodID) => {
setProd(prod.filter((el) => el.id !== prodID));
}
const handleAdd = (newProduct) => {
setProd([...prod, newProduct])
}
const handleEdit = (editeProd) => {
setProd(prod.map((el) => (el.id === editeProd.id ? editeProd : el)));
}
  //*************************************//
  return (
    <div className="App">
      <Entete search={search} handleSearch={handleSearch} />
      <AddList />
      <ProductList prod={prod} search={search} />
      <hr/>
      <h2>Admin section</h2>
      <hr/>
      <AdminCartList prod={prod} search={search} del={handleDelete} edit={handleEdit} />
      <AdminAddProduct add={handleAdd} />
    </div>
  );
}

export default App;
