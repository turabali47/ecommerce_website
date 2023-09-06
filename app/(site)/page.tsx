import Banner from '@/components/Banner/page'
import ProductCard from '@/components/ProductCard/page'
import Navbar from '@/components/navbar/Navbar'

export default async function Home() {
  return (
    <div>
      {/*@ts-ignore*/}
      <Banner /> 
      <div className=' mx-auto'>
        {/*@ts-ignore*/}
        <ProductCard />
      </div>
    </div>
  )
}
