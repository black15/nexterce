import Head from 'next/head'
import ProductCard from '../components/ui/products/card'
import { Hero } from '../components/ui/hero';
import { useSession } from "next-auth/react";
import { getProducts, getSliderImages } from '../services';

export default function Home({products, images}) {  
  return (
    <>
      <Head>
        <title>Nexterce</title>
      </Head>
      <main>
        <Hero images={images.images} />
        <div className='text-3xl text-gray-800 dark:text-gray-100 text-center font-semibold mt-8 mb-4'>
          SHOP YOUR <span className='title dark:border-[#5FB4E7] border-[#158bd4] border-b-4'>BESTSELLERS</span>
        </div>
        <div className='flex flex-row flex-wrap justify-center'>
          {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const products = (await getProducts() || [])
  const images = (await getSliderImages() || [])
  return {
    props: {
      products,
      images,
    }
  }
}
