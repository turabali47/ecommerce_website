import ProductCard from '@/components/ProductCard/page';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { getCategoriesData, getCategoryData } from '@/sanity/sanity-utils'
import { Products, ProductsForCard } from '@/types/Product';
import { groq } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

   const filteredProductsData = async (category:string) => {
        const res = await client.fetch(

        groq `*[_type == "products" && category->name == "${category}"]{
            _id,
            title,
            "slug": slug.current,
            category,
            subCategory,
            color,
            images[0],
            sale,
            discount,
            available,
            price,
        }`
    )
    return res;
        }

export default async function collections({params}:{params:{category:string}}) {
    
    const category = await getCategoryData(params.category);

    const filteredProducts = await filteredProductsData(params.category);
    
    return (
    <div>
        <h1 className='mt-8 mb-4 font-semibold text-center text-xl'>
            {params.category}
        </h1>

        <div className=' mx-auto my-8 grid grid-cols-3 justify-center'>
        {filteredProducts.map((product:ProductsForCard) =>(
                <div key={product._id} className=' w-72 h-128 rounded-lg shadow-lime-300 drop-shadow-xl my-4 mx-4'>
                    {/*@ts-ignore*/}
                    <ProductCard product={product} />
            {/* <Link href={`/products/${product.slug}`}>
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
                        </div> */}
                    {/* <Image src={product.images[0]} width={200} height={200} alt='Preview Not Available' /> */}
                    {/* </div> */}
            {/* </Link> */}
                </div>
        ))}
        </div>

    </div>
    )
}
