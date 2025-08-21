import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../../../mini-shop_teacher/src/store/cartReducer';

// 상품 데이터
const PRODUCTS = [
  { id: 1, name: 'Keyboard', price: 49000 },
  { id: 2, name: 'Mouse', price: 29000 },
  { id: 3, name: 'Monitor', price: 199000 },
];

function Shop() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);

  const inCart = (id) => items.some((item) => item.id === id);

  return (
    <section style={{ padding: '0 10px' }}>
      <h2>Shop</h2>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <div>{product.name}</div>
            <div>{product.price.toLocaleString()}원</div>
            <button onClick={() => dispatch(addToCart(product))} disabled={inCart(product.id)}>
              {inCart(product.id) ? '담김' : '장바구니 담기'}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Shop;
