// 지금은 useContext를 사용하는 것이 더 복잡성을 올립니다.
// 다만 복잡도가 증가했을 때에는 useContext를 사용하는 것이 좋습니다.

// Q: 아니, 너무 어렵잖아요? addToCart를 Cart 컴포넌트에 위치해주면 안되나요? 뭐하러 전달하죠?
// A: 맞습니다. 다만 그러면 addToCart를 통해서 카트안에 상품을 추가할 때, Cart 컴포넌트만 업데이트가 됩니다.
// 예를 들어, 재고가 반영이 되어야 한다던지, 있는 현금이 반영이 되어야 한다던지 하면
// 반영을 못시키게 됩니다.

import { useContext, useState, createContext } from "react";

const MyContext = createContext();

const products = [
  { id: 1, name: "노트북", price: 1000 },
  { id: 2, name: "스마트폰", price: 500 },
  { id: 3, name: "태블릿", price: 300 },
];

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(productItem) {
    const existing = cart.find((item) => item.id === productItem.id);
    if (existing) {
      setCart(
        cart.map((item) => {
          return item.id === productItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        })
      );
    } else {
      setCart([...cart, { ...productItem, quantity: 1 }]);
    }
  }

  function minusToCart(productItem) {
    setCart(
      cart
        .map((item) => {
          return item.id === productItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        })
        .filter((item) => item.quantity > 0)
    );
  }

  function removeToCart(productItem) {
    setCart(cart.filter((item) => item.id !== productItem.id));
  }

  return (
    <MyContext.Provider
      value={{ products, cart, addToCart, removeToCart, minusToCart }}
    >
      <h1>나의 리액트 앱</h1>
      <ProductList />
      <Cart />
    </MyContext.Provider>
  );
}

function ProductList() {
  const { addToCart, products } = useContext(MyContext);

  return (
    <>
      <h2>상품목록</h2>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <h3 style={{ display: "inline-block" }}>
                <span>{product.id}. </span>
                {product.name}
              </h3>
              <p style={{ display: "inline-block", marginLeft: "5px" }}>
                - 가격 : {product.price}원
              </p>
              <button
                onClick={() => addToCart(product)}
                style={{ marginLeft: "5px" }}
              >
                추가
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function Cart() {
  const { minusToCart, removeToCart, cart } = useContext(MyContext);

  return (
    <>
      <h2>장바구니</h2>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <h3 style={{ display: "inline-block" }}>
              <span>{item.id}. </span>
              {item.name}
            </h3>
            <p style={{ display: "inline-block", marginLeft: "5px" }}>
              - 가격 : {item.price}원 <span>({item.quantity}개)</span>
            </p>
            <button
              onClick={() => minusToCart(item)}
              style={{ marginLeft: "5px" }}
            >
              1개만 삭제
            </button>
            <button
              onClick={() => removeToCart(item)}
              style={{ marginLeft: "5px" }}
            >
              전체 삭제
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
