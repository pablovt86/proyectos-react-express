import { useState } from 'react';
import './App.css';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const App = () => {
// el estado inicial de cada categoria va  a ser vacio
  const [categories, setCategories] = useState([]);

  return (
    <div className="container">
    <h1 className="my-4">Giphy Comisión 12</h1>
    <hr/>
    <AddCategory setCategories={setCategories}/>
    <ul>
      {
        categories.map((category) => (
         <GifGrid
         category={category}
         key={category}
         />
        ))
      }
    </ul>

    </div>
  );
}
