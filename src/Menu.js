import React from "react";

const Menu = ({ items,category }) => {
  return (
    <div className="section-center">
      {items.filter((item) => (category !== "" ? item.category === category : true))
      .map((items) => {
        const { id, title, img, desc,price } = items;
        return (
          <main key={id} className="menu-item">
            <img className="photo" src={img} alt={title} />
            <div className="item-info">
              <h4>{title}</h4>
              <h4 className="price">${price}</h4>
            </div>
            
            <p className="item-text">{desc}</p>
          </main>
        );
      })}
    </div>
  );
};

export default Menu;