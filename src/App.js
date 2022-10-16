import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
 const [category, setCategory] = useState("")
  console.log(category);

return (
    <div className="section">
      <h2 className='title'>OUR MENU</h2>
      <div className="underline"></div>
      <Categories category={category} setCategory={setCategory} />
      <Menu items = {items} category={category}/>
    
     
    </div>
  );
}

export default App;