import React from 'react';
import { useQuery } from '@/hooks/use-query';

export default function App() {
  const { isLoading, data: product } = useQuery<IProduct>({
    queryFn: () => fetch('https://dummyjson.com/products/1'),
  });

  const { data: products } = useQuery<{ products: IProduct[] }>({
    queryFn: () => fetch('https://dummyjson.com/products?limit=100'),
  });

  console.log('products', products);

  // const [isLoading, setIsLoading] = React.useState(false);
  // const [product, setProduct] = React.useState<IProduct | null>(null);

  // React.useEffect(() => {
  //   (async () => {
  //     setIsLoading(true);
  //     try {
  //       const res = await fetch('https://dummyjson.com/products/1');
  //       const product = await res.json();
  //       setProduct(product);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   })();
  // }, []);

  if (isLoading)
    return (
      <div aria-busy className="h-svh grid place-content-center">
        <div
          aria-label="Loading product"
          className="border border-black size-4 rounded-full border-t-transparent animate-spin"
        />
      </div>
    );

  return (
    <div className={`h-svh bg-slate-50 text-[#181818] dark:bg-[#181818] dark:text-slate-50`}>
      <h1 className="font-mono text-2xl">total = {products?.products?.length}</h1>
      {product?.images[0] && <img src={product.images[0]} alt="product" width={200} height={200} />}
    </div>
  );
}

interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}
