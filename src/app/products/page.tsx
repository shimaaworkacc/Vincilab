import React from 'react'
import ProductItem from '../_components/Productitem'
import { ProductInterface } from '@/interfaces/product.interface';
import productarray from '@/assets/array/productsArray';

export default function products() {

  return (
    <div className='flex flex-wrap justify-evenly items-center mx-auto my-5 '>
      {productarray().map((prod: ProductInterface) => <ProductItem key={prod._id} prod={prod}></ProductItem>)}
    </div>
  )
}
