import Image from 'next/image';
import React from 'react'
import ProductItemBtn from '../_components/Productitembtn';
import array from '@/assets/array/productsArray';

export default async function page({ params }: { params: string }) {
    const data = array().find((prod) => prod[0] === params);
    return (
        <div className='p-10 flex flex-wrap flex-col items-center justify-center gap-5 w-full group'>
            <Image src={data ? data[2] : ''} alt={data ? data[0] as string : ''} width={200} height={200} className='object-cover' />

            <h1>{data ? data[0] as string : null}</h1>
            <p className='text-gray-600'>{data ? data[4] as string : ''}</p>
            <p>Price: ${data ? data[4] as string : ''}</p>
            <span className='text-xs block'>By: {data ? data[6] as string : ''}</span>
            <p className='text-black'>{data ? data[5] as string : ''}</p>

            <ProductItemBtn id={data ? data[0] as string : ''} ></ProductItemBtn>

            <h2 className='my-5 text-2xl font-bold text-center text-main'>related products</h2>
        </div>
    )
}
