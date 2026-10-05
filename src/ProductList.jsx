import React from 'react'
import { useContext } from 'react'
import { ShopContext } from './ShopContextProvider'

const ProductList = () => {

    const {food} = useContext(ShopContext);
    return(
        <div className='grid grid-cols-3 gap-3 align-center pt-20'>
            {food.map((product)=>{
            return (
    <div key={product.id} className='flex hover:bg-black/60 flex-col gap-4 p-2 cursor-pointer justify-center items-center align-center w-[300px] h-[300px] rounded-md '>
        <img src={product.image} alt={product.title} className='w-[200px] h-[200px]'/>
        <h2 className='text-xl font-bold'>{product.title}</h2>
        <p>R{product.price}</p>

    </div>
  )

    })}
        </div>
    )
        
  

    
    
}

export default ProductList