import { urlForImage } from '@/sanity/lib/image';
import { getProductsDataForCard } from '@/sanity/sanity-utils';
import { Products, ProductsForCard } from '@/types/Product';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'




export default async function ProductCard() {
    const products = await getProductsDataForCard();

    
  return (
    // <div>

        <div className=' mx-auto my-8 grid grid-cols-[auto,auto,auto,auto] justify-center'>
                                                {/* "grid-cols-[repeat(3,auto)]" can also be used */}
            {products.map((product:ProductsForCard) =>(
                <div key={product._id} className=' w-72 h-128 rounded-lg shadow-lime-300 drop-shadow-xl my-4 mx-6'>
                    <Link  href={`/products/${product.slug}`}>
                        <div className='w-full h-4/5 relative text-right'>
                            <Image src={urlForImage(product.images).url()} alt='Preview' fill={true} />
                            <div className='absolute right-1 top-1'>
                                {product.sale?(<p className=' w-14 h-8 bg-yellow-500 bg-opacity-50 mr-4 mt-4 rounded-lg flex items-center justify-center'>
                                    -{product.discount}%
                                </p>):null}
                            </div>
                        </div>
                        <div className=' w-full h-1/5 bg-yellow-800 backdrop-blur-md opacity-50 text-white'>
                            <h1 className=' font-medium text-center py-2'>{product.title}</h1>
                            <div className=' align-bottom'>
                            {product.sale?(
                                <p className=''>
                                    <span className=' line-through'>{product.price}</span>
                                    <span className=' font-bold'>{product.price - (product.discount*0.01*product.price)}</span>
                                </p>):(<p>
                                    <span className=' font-bold'>{product.price}</span>
                                </p>)}
                            </div>
                        {/* <Image src={product.images[0]} width={200} height={200} alt='Preview Not Available' /> */}
                        </div>
                    </Link>
                </div>

            ))}
        </div>
    // </div>
  )
}
