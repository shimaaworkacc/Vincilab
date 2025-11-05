'use client'
import { Button } from '@/components/ui/button'
// import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
// import { toast } from 'react-toastify';

export default function ProductItemBtn({ id }: { id: string }) {
    // const queryClient = useQueryClient();

    // const { mutate,isPending } = useMutation({

    //     mutationFn: addProduct,
    //     onSuccess: () => {
    //         toast.success('successfully added to cart');
    //         queryClient.invalidateQueries({ queryKey: ['/cart'] })
    //     },
    //     onError: () => { toast.error('login first') },

    // });
    return (
        <>
            {/* {isPending ? <div>Loading...</div> :  */}
           { <Button
            //  onClick={() => mutate(id)}
                className='shadow cursor-pointer hover:text-green-color w-5/6 hover:bg-dark-color text-xs p-3 bg-brown-color text-beige-color rounded-lg hover:shadow-2xl'>
                + Add to cart
            </Button>}
        </>
    )
}
