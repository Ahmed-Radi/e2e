"use client";

import React from "react";
import CartIcon from "../_components/CartIcon";
import useCart from "@/store/cartContext";
import { Button } from "@/components/ui/button";
import NoData from "@/components/NoData";
import Link from "next/link";
import { cn } from "@/lib/utils";

const CartPage = () => {
	const { cart, handleRemoveItem } = useCart();

	const totalCost = cart.reduce((product, item) => product + item.price, 0);

	return (
		<section className='flex flex-col gap-5 justify-end'>
			<div className='flex justify-between'>
				<Link
					href='/'
					className='cursor-pointer hover:underline font-semibold text-lg'>
					Home
				</Link>
				<CartIcon />
			</div>
			<div className='flex flex-1 flex-col gap-3 h-full py-3 rounded-md'>
				<div
					className={cn("flex flex-col gap-3", {
						"border-none": cart.length === 0,
					})}>
					{cart.length > 0 ? (
						cart.map(({ id, name, price }) => (
							<div
								key={id}
								className='flex justify-between flex-col sm:flex-row gap-5 rounded-md p-1.5 border border-zinc-400'>
								<div className='flex flex-1 justify-between items-center'>
									<p className='font-semibold'>{name}</p>
									<p className='font-semibold'>{price}$</p>
								</div>
								<Button onClick={() => handleRemoveItem(id)}>
									Remove
								</Button>
							</div>
						))
					) : (
						<NoData title='No items in cart' />
					)}
				</div>
				<div className='flex justify-between px-3'>
					<div className='flex items-center gap-2'>
						<p className='font-semibold'>Price:</p>
						<span>{totalCost}$</span>
					</div>
					<div>
						<Button variant={"outline"}>Checkout</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CartPage;
