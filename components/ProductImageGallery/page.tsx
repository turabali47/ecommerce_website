"use client"

import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import React, { useState } from 'react'
import { Image as IImage } from 'sanity'

export default function ProductImageGallery(props:{image0:IImage,images:IImage[]}) {
    const image0:IImage = props.image0;
    const images:IImage[] = props.images;
    const [imageDisplayed, setImageDisplayed] = useState(props.image0)
    
    return (
        <div className='flex justify-between gap-3'>
        
            <div className=' w-20 flex-col justify-start'>
                
                    {props.images.map((image:IImage)=>(

                        <button key={image.asset?._key} className=' w-full h-28 mr-4 mb-4'>
                            <Image 
                            src={urlForImage(image).url()} 
                            width={80} 
                            height={112} 
                            alt='Preview'
                            onClick={()=>setImageDisplayed(image)} />
                        </button>
                    ))}
            </div>

            <div className=' w-96 h-128 border-2 flex items-center'>
                <Image className=' min-h-full' src={urlForImage(imageDisplayed).url()} width={512} height={1024} alt={"Preview"} />
            </div>
        </div>
  )
}
