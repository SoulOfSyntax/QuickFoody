import React from "react";
import { useContext } from "react";
import { ShopContext } from "./ShopContextProvider";
import logo from './assets/logo2.jpg'

const ProductList = () => {
  const { food } = useContext(ShopContext);
  return (
    <div>
      <div className="w-full h-[250px] flex flex-col bg-black gap-5 flex justify-center items-center align-center">
            <img src={logo} className="w-[150px] h-[100px]  flex rounded-lg"/> 
            <h2 className="text-white text-5xl pb-4">Our Collection</h2>
      </div>
      <div className="grid grid-cols-3 gap-3 align-center pt-20">
        {food.map((product) => {
          return (
            <div
              key={product.id}
              className="flex hover:bg-black/40 flex-col gap-3 p-2 cursor-pointer justify-center items-center align-center w-[300px] h-[300px] rounded-md "
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-[200px] h-[200px] flex rounded-lg"
              />
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p>R{product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
