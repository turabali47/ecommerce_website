import Banner from '@/components/Banner/page'
import ProductCard from '@/components/ProductCard/page'
import { getProductsDataForCard } from '@/sanity/sanity-utils';
import { ProductsForCard } from '@/types/Product';

export default async function Home() {

  const products = await getProductsDataForCard();


  return (
    <div>
      {/*@ts-ignore*/}
      <Banner /> 
      <div className=' mx-auto'>
        <div className=' mx-auto my-8 grid grid-cols-[auto,auto,auto,auto] justify-center'>
                                                {/* "grid-cols-[repeat(3,auto)]" can also be used */}
            {products.map((product:ProductsForCard) =>(
                <div key={product._id} className=' w-72 h-128 rounded-lg shadow-lime-300 drop-shadow-xl my-4 mx-6'>


                  {/*@ts-ignore*/}
                  <ProductCard product={product} />
                </div>

            ))}
        </div>
      </div>
    </div>
  )
}
