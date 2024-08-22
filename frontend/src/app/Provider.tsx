import { CartProvider } from "@/store/cartContext";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>{children}</CartProvider>
  );
}