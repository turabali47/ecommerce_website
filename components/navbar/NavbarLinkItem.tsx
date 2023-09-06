import { getCategoriesData } from '@/sanity/sanity-utils';
import { Categories } from '@/types/Categories';
import Link from 'next/link';
import React from 'react'

export default async function NavbarLinkItem() {
  
  const categories = await getCategoriesData();

  
  return (
    <ul className='flex justify-between gap-3'>

      {categories.map((category:Categories)=>(
        <Link href={`collections/${category.name}`} key={category._id}>
          <li className='px-5 py-3'>{category.name}</li>
        </Link>
        ))
        
      }
    </ul>
  )
}
