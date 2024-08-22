import { getProducts } from "@/lib/calls";
import CartIcon from "./_components/CartIcon";
import HomeContent from "./_components/HomeContent";

export default async function Home() {
	const products = await getProducts();

	return (
		<main className='flex flex-1 gap-5 flex-col'>
			<div className='flex justify-end'>
				<CartIcon />
			</div>
			<HomeContent data={products} />
		</main>
	);
}
