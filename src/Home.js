import React from "react";
import Product from "./Product";
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <div>
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png"
          alt=""
        />
        <div className="home__row">
          <Product
            id="67"
            title="Apple MacBook Air Laptop M1 chip (Gray)"
            price={96990}
            image="https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="68"
            title="OnePlus 8T (Aquamarine Green)"
            price={42999}
            image="https://m.media-amazon.com/images/I/61FPjQ5tFZL._SL1498_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="69"
            title="Casio G-Shock Analog-Digital Watch-GA-1100"
            price={13945}
            image="https://m.media-amazon.com/images/I/61uyZzGIKNL._UL1100_.jpg"
            rating={5}
          />
          <Product
            id="70"
            title="Ray-Ban Wayfarer 60mm (Black)"
            price={8299}
            image="https://m.media-amazon.com/images/I/51Uk4T3TO9L._UL1500_.jpg"
            rating={4}
          />
          <Product
            id="71"
            title="Lenovo IdeaCentre Gaming 5 Desktop (AMD Ryzen 5 5600G/8GB/512GB SSD/Windows 11/NVIDIA GeForce GTX 1660 Super 6GB GDDR6 Graphics)"
            price={79900}
            image="https://m.media-amazon.com/images/I/51BjZOorzVL._SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="72"
            title="Sony Bravia 4K (55 inches)"
            price={50990}
            image="https://m.media-amazon.com/images/I/71+7bU+fkVL._SL1500_.jpg"
            rating={5}
          />
        </div>
       
      </div>
    </div>
  );
}

export default Home;
