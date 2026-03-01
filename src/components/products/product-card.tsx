import type { IProduct } from '@/types/product';
import { Card, CardContent } from '../ui/card';
import { Link } from 'react-router';

interface Props {
  product: IProduct;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card className="p-3">
      <CardContent className="p-0">
        <img src={product.images[0]} alt="" width={600} height={600} />
        <div>
          <Link to={`/products/${product.id}`} className="font-semibold">
            {product.title}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
