import { useEffect, useState } from "react";
import styled from "styled-components";
import Cart from "./components/Cart";
import Products from "./components/Product";

/**
 * @param {string} url
 * @param {string} method
 * @returns
 */

async function api(url, method, body = undefined){
  return await fetch(`http://localhost:4000${url}`, {
    body: body !== undefined ? JSON.stringify(body) : body,
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

/**
 * busca todos os produtos da API
 * @returns
 */

async function apiGetProducts(){
  const data = await api("/products", "GET");
  return data.products;
}

/**
 * @param {Object[]} products
 */

async function apiSubmitCart(products){
  await api("/purchases", "POST", { products });
}

function App(){
  const [productsLoading, setProductsLoading] = useState(false);
  const [products , setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartLoading, setCartLoading] = useState(false);


  /**
  * Busca os produtos
  */

  async function getProducts(){
    setProductsLoading(true);
    setProducts(await apiGetProducts());
    setProductsLoading(false);
  }

  /**
   * Salva o Carrinho
   */

  async function submitCart(){
    setCartLoading(true);
    await apiSubmitCart(cart);
    setCart([]);
    setCartLoading(false);

    getProducts()
  }

  /**
   * Altera unidade do produto
   */

  function setProduct(product, change){
    const products = cart.filter(({id}) => {
      return id !== product.id;
    });

    product.unit += change;
    if(product.units > 0){
      setCart(() => [...products, product]);
    }
    else{
      setCart(() => [...products]);
      setProducts((lastProducts) => [...lastProducts, product]);
    }
  }

  /**
   * adiciona produto no carrinho
   */

  function addProduct(product){
    product.units = 1;
    setCart(() => [...cart, product]);

    setProducts(() =>
      products.filter(({id}) => {
        return id !== product.id;
      })
    );
  }

  useEffect(() => {
    getProducts();
  }, []);
  
  const SMain = styled.main`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
  `;

  return(
    <SMain>
      <Cart
        products={cart}
        onChange={setProduct}
        onClick={submitCart}
        isLoading={cartLoading}
      />
      <Products
        products={products}
        onClick={addProduct}
        isLoading={productsLoading}
      />      
    </SMain>
  );
}

export default App;


