import { notFound } from 'next/navigation'
import { feature } from '@/app/Cart/Data/detail';
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import ProductDetails from '@/app/components/ProductDetails'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params
  const product = feature.find(p => p.id === parseInt(id))

  if (!product) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <ProductDetails product={product} />
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return feature.map((product) => ({
    id: product.id.toString(),
  }))
}
