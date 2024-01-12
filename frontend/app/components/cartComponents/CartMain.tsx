'use client'

import Link from "next/link";
import React, { useState, useEffect } from "react";
import CartNav from "./CartNav/CartNav";
import Btn from "../Btn/Btn";
import CartList from "./cartList/CartList";
// import Image from 'next/image';

export default function CartMain() {
  // const [requestData, setRequestData] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const token = localStorage.getItem('token');
  //     const response = await fetch('http://localhost:3560/cart', {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
  //     if (!response.ok) {
  //       throw new Error("Error fetching data");
  //     }
  //     const data = await response.json();
  //     console.log(data);
  //     setRequestData(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const [requestData, setRequestData] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch("http://localhost:3560/cart", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => res.json())
    .then((data) => {
      setRequestData(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);




  return (
    <main className="flex flex-col overflow-hidden w-full h-full">
      <Link href='/payment' className="ml-auto">
        <Btn textContent='주문하기' className="h-10 w-28 border border-black flex items-center justify-center" />
      </Link>
      <CartNav />
      <ul id="productUl" className="flex flex-col gap-6 overflow-scroll">
        {requestData.map((item, index) => (
          <CartList
            key={index} // 반드시 고유한 key를 제공해야 함
            pUrl={item.image_url}
            pCount={item.cart_quantity}
            pPrice={item.paymentpriceatorder}
            pSub={item.description}
          />
        ))}
      </ul>
    </main>
  );
}
