"use client";

import { ICartContext, IProduct } from "@/types";
import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

const CartContext = createContext<ICartContext>({
	handleAddCart: () => {},
	cart: [],
	handleRemoveItem: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [cart, setCart] = useState<IProduct[]>([]);

	const handleAddCart = (product: IProduct) => {
		if (!cart.some(item => item.id === product.id)) {
			setCart(prev => [...prev, product]);
			toast("Product added.", {
				description: `${product.name} added to your cart`,
			});
		} else {
			(function () {
				toast("Alert !", {
					description: "This product is already in the cart",
				});
			})();
		}
	};

	const handleRemoveItem = (id: number) => {
		setCart(prev => prev.filter(item => item.id !== id));
		const { name } = cart.filter(item => item.id === id)[0];
		toast("Alert !", {
			description: `${name} is REMOVED from the cart`,
		});
	};

	return (
		<CartContext.Provider value={{ cart, handleAddCart, handleRemoveItem }}>
			{children}
		</CartContext.Provider>
	);
};

const useCart = () => {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};

export default useCart;
