import { useDispatch, useSelector } from 'react-redux';

function Shop() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  // 상품 데이터
  const PRODUCTS = [
    { id: 1, name: 'Keyboard', price: 49000 },
    { id: 2, name: 'Mouse', price: 29000 },
    { id: 3, name: 'Monitor', price: 199000 },
  ];

  return (
    <section style={{ padding: '0 10px' }}>
      <h2>Shop</h2>
      <div className='cart-item-wrap' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {PRODUCTS.map((item) => {
          // 장바구니 담기버튼을 disabled로 만들기 위해서 함수를 만들어야함
          function disabled() {}

          return (
            <div key={item.id} style={{ border: '2px solid #e5e5e5', padding: '15px', borderRadius: '10px' }}>
              <p style={{ padding: '0', margin: '0' }}>{item.name}</p>
              <p style={{ padding: '0', margin: '0' }}>{item.price}</p>
              <button type='button' style={{ marginTop: '10px' }} onClick={() => dispatch({ type: 'ADD_ITEM', item: item })} disabled={disabled}>
                장바구니 담기
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Shop;
