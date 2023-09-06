import React from 'react'
import Logo from '../Logo'
import NavbarLinksSection from './NavbarLinksSection'
import { GiShoppingCart } from 'react-icons/gi'
import { FaRegHeart } from 'react-icons/fa'
import { RxPerson } from 'react-icons/rx'
import { HiMiniMagnifyingGlass } from 'react-icons/hi2'
import Link from 'next/link'



export default function Navbar() {
  return (
    <div className='flex justify-between px-10 pt-5'>
        <Link href={'/'}>
          <Logo />
        </Link>
        <NavbarLinksSection />
        <div className='flex justify-between gap-2 pt-3'>
          <HiMiniMagnifyingGlass size={"25"} />
          <RxPerson size={"25"} />
          <FaRegHeart size={"25"} />
          <GiShoppingCart size={"30"} />
        </div>
    </div>
  )
}
