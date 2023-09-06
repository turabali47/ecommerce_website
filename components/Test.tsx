import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { getProductsDataForCard } from '@/sanity/sanity-utils';
import { Products } from '@/types/Product';
// import { groq } from 'next-sanity';
import Image from 'next/image';
import React from 'react'


// export const getImages = async () => {

//   const res = await client.fetch(
//       groq `*[_type == "products"]{
//           _id,
//           _createdAt,
//           _updatedAt,
//           title,
//           description,
//           category,
//           subCategory,
//           color,
//           images[0],
//           sale,
//           discount,
//           available,
//           price,
//       }`
//   )
//   return res;
// }

export default async function Test() {
    console.log("Hellow")
    const products = await getProductsDataForCard();
  return (
    // <div>
    //   {products.map((product:Images) => (
    //     <div key={product._id}>
    //       <h2>{product.title}</h2>
    //       {product.images.map((image)=>(
    //         <img src={urlForImage(image).width(200).url()} alt='preview' />))}
    //     </div>
    //       ))}
    //     {/* <Image src={product.images} alt='preview' width={300} height={300} />))} */}
    // </div>

    <div>
        {products.map((product:Products) =>(
            <div key={product._id} className=' flex justify-between mx-10'>
                <div className='rounded-lg shadow-xl my-4 mx-4'>
                    {/* <div style={{backgroundImage: `${urlForImage(product.images[1]).url()}`}}  
                        className='w-full h-3/4 flex justify-end'>
                        {product.sale?(<p className=' w-14 h-8 bg-yellow-500 bg-opacity-50 mr-4 mt-4 rounded-lg flex items-center justify-center'>-{product.discount}%</p>):null}
                    </div>
                    <div>
                        <h1 className='font-medium text-center py-4'>{product.title}</h1>
                        {product.sale?(
                            <p>
                                <span className=' line-through'>{product.price}</span>
                                <span className=' font-bold'>{product.price - (product.discount*0.01*product.price)}</span>
                            </p>):(<p>
                                <span className=' font-bold'>{product.price}</span>
                            </p>)}
                      // <Image src={urlForImage(product.images[0].url())} width={200} height={200} alt='Preview Not Available' />
                    </div> */}
                    {/* {product.images.map((image)=>(
                      <div> */}


                        <div className=' relative text-right'>
                          <Image src={urlForImage(product.images[0]).url()} width={300} height={300} alt='Preview' />

                          <div className=' absolute top-1 right-2'>
                            {product.sale?(<p className=' w-14 h-8 bg-yellow-500 bg-opacity-50 mr-4 mt-4 rounded-lg flex items-center justify-center'>-{product.discount}%</p>):null}
                          </div>
                        </div>

                      {/* </div> */}
                      {/* ))} */}


                     {/* <img key={image.asset?._key} src={urlForImage(image).url()} alt='Preview Not Available' />))} */}
                </div>
            </div>
        ))}
    </div>
  )
}
