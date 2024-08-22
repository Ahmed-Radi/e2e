"use client";

import React, { memo } from 'react'
import { Button } from './ui/button'
import { ShoppingBasket } from 'lucide-react'
import useCart from "@/store/cartContext";
import { IProduct } from '@/types';

interface IProductItemProps {
  data: IProduct;
}

const ProductItem = ({ data }: IProductItemProps) => {
  const { name, description, price } = data;

  const { handleAddCart } = useCart();

  return (
    <div className='w-full md:w-[calc(50%-9px)] lg:w-[calc(33.33%-9px)] xl:w-[calc(25%-9px)] flex flex-col justify-between gap-3 rounded-md shadow-sm p-3 bg-slate-50 hover:shadow-lg transition-all duration-500'>
      <h3 className='text-lg font-semibold'>{name}</h3>
      <p>{description}</p>
      <p><span className='font-semibold'>{price}</span>$</p>
      <Button onClick={() => handleAddCart(data)}>Add to cart <ShoppingBasket className='ml-2' /></Button>
    </div>
  )
}

export default memo(ProductItem)