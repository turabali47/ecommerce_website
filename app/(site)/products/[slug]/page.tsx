"use client"
import ProductImageGallery from '@/components/ProductImageGallery/page';
import { getProductData } from '@/sanity/sanity-utils'
import { Products } from '@/types/Product';
import { PortableText } from '@portabletext/react';
import React from 'react'
import { FaRegHeart } from 'react-icons/fa';

export default async function products({params}:{params:{slug:string}}) {

    const product:Products = await getProductData(params.slug);

    // const [imageDisplayed, setImageDisplayed] = useState(product.images[0])

  return (
    <div className=' m-24 flex justify-center gap-16 max-w-full'>
      {/* <div className='flex justify-between gap-3'>
        <div className=' w-20 flex-col justify-start'>
          {product.images.map((image:IImage)=>(
            <div className=' w-full h-28 mr-4 mb-4'>

              <Image src={urlForImage(image).url()} width={80} height={112} alt='Preview' onClick={()=>setImageDisplayed(image)}/>
            </div>
          ))}
        </div>
        <div className=' w-96 h-128 border-2'>
            <Image src={urlForImage(product.images[0]).url()} width={512} height={1024} alt={product.title} />
            
        </div>

      </div> */}

      <ProductImageGallery image0={product.images[0]} images={product.images}/>
      
      <div>
        <h1 className='mb-4 text-3xl font-bold'>{product.title}</h1>
        <h1 className='mb-4 text-3xl'>Rs.{product.sale?(
          <span>
              <span className=' text-3xl line-through'>{product.price}</span>
              <span className=' text-3xl font-semibold'>{product.price - (product.discount*0.01*product.price)}</span>
          </span>):(<span>
              <span className=' text-3xl font-semibold'>{product.price}</span>
          </span>)}
        </h1>
        <div className='flex justify-center'>
          <button className="text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-xl rounded-lg text-lg w-full px- py-3 mr-2 my-3 dark:focus:ring-yellow-900">ADD TO CART</button>
          <button className='border-4 rounded-lg px-2 py-2 mx-2 my-3'><FaRegHeart size={25} /></button>
        </div>
        <div className='mt-6'>
          <PortableText value={product.description} />
        </div>

      </div>

    </div>
  )
}
