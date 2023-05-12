import React, {useEffect, useState } from "react";

export default function Products() {
  const [isShow, setShow] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(()=>{

    fetch('data/product.json')
    .then((res)=>res.json())
    .then((data) =>{
        console.log("🔥데이터를  받아왔어요")
        setProducts(data);
      })

  },[isShow])


  const showHandler = () => {
    setShow(!isShow);
  }

  return (
    <>
    <button onClick={showHandler}>보여주기</button>
      <ul>
        {!isShow && products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}