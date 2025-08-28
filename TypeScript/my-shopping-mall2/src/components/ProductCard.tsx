import { useEffect, useState } from 'react';
import { fetchAllProducts } from '../service/api';
import type { Product } from '../type/index';

export default function ProductCard() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchAllProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className='border p-4 rounded-lg mb-4'>
          <h3>{product.productName}</h3>
          <p>가격: {product.price}원</p>
        </div>
      ))}
    </div>
  );
}
