// 'use server'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import ProductItemBtn from '../products/_components/Productitembtn';
import { ProductInterface } from '@/interfaces/product.interface';



export default async function ProductItem({ prod }: { prod: ProductInterface }) {
    
    return (
        <div className='hover:scale-105 transition-transform duration-300 w-full text-sm sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/6 text-center flex justify-center flex-col items-center group px-2 py-5 rounded-2xl bg-beige-color m-2'>
            <Link href={`/products/${prod.slug}/${prod._id}`}>
                <Image src={prod.imageCover} width={300} height={300} alt={prod.title} className='w-full h-auto' />
                <h2 className='text-sm w-40 overflow-ellipsis truncate font-bold text-brown-color'>{prod.title}</h2>
                <div className="flex justify-center my-5 items-center">
                    {/* {prod[6] ?<div> <p className='line-through'>Price: ${prod[7]} EGP</p><p> ${prod[6]} EGP</p></div> : <p>Price: ${prod[7]} EGP</p>} */}
                    <p> ${prod.price} EGP</p>
                    <p> {prod.quantity} </p>
                </div>
                <span className='text-xs block'>By: {prod.category.name}</span>

            </Link>
            <div className='flex justify-between items-center mt-2'>
                <ProductItemBtn id={prod._id} ></ProductItemBtn>
                {/* <HeartItem  id={prod[0]}></HeartItem> */}
            </div>
        </div>
    )
}

