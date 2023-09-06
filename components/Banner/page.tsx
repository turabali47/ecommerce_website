import { getBannerData } from '@/sanity/sanity-utils'
import { Banner } from '@/types/Banner';
import { PortableText } from '@portabletext/react';
import { url } from 'inspector';
import React from 'react'
import { PortableTextBlock } from 'sanity';

//interface Banner {
//  promo_title:string;
  //description:PortableTextBlock
//}

export default async function Banner() {
    
  const bannerData = await getBannerData();

  return (
       
      <div>
        {bannerData.map((banner:Banner)=>(
          <div key={banner._id} style={{backgroundImage: `url(${banner.image})`}} 
                className=' bg-cover mt-4 py-16'>
            <div className='px-16 py-24 text-gray-200 outline-4 outline-black'>
              <h1 className=' font-bold text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>{banner.promo_title}</h1>
              <div className=' pr-72 text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                <PortableText value={banner.description} />
              </div>

          <button type="button" 
              className= "focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-xl rounded-lg text-lg px-6 py-3 mr-2 my-3 dark:focus:ring-yellow-900">
                    {banner.cta_button}
          </button>

              
            </div>
          </div>
          ))}
      </div>

  )
}
