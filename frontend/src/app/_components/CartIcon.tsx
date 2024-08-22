"use client";

import useCart from '@/store/cartContext';
import { ShoppingBasket } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const CartIcon = () => {

  const { cart } = useCart();

  return (
    <Link href="/cart" className='relative'>
      <ShoppingBasket />
      <span className='absolute bg-red-600 rounded-[50%] text-xs text-white top-[-7px] left-[15px] h-[20px] w-[20px] flex items-center justify-center'>
        {cart.length}
      </span>
    </Link>
  )
}

export default CartIcon