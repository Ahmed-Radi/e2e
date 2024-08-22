"use client";

import { cn } from "@/lib/utils";
import { useState, useCallback, useMemo } from "react";
import ProductItem from "@/components/ProductItem";
import SliderRange from "@/components/SliderRange";
import { IProduct } from "@/types";
import NoData from "@/components/NoData";
import FilterBar from "./FilterBar";

type Props = {
  data: IProduct[]
}

const HomeContent = ({ data }: Props) => {
  const [products, setProducts] = useState<IProduct[]>(data);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = useCallback((inputValue: string) => {
    setInputValue(inputValue);
  }, []);

  /** FILTER BY PRICE */
  // Extracting the prices from the array
  const prices = useMemo(() => products.map((product: IProduct) => product.price), [products]);
  const max = useMemo(() => Math.max(...prices), [prices]);
  const min = useMemo(() => Math.min(...prices), [prices]);

  const [minValue, set_minValue] = useState<number>(min);
  const [maxValue, set_maxValue] = useState<number>(max);

  const handleInput = useCallback((e: any) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  }, []);

  // Function to sort products by price in ascending or descending order
  const sortData = useCallback((type: 'price' | 'name', order: 'asc' | 'des' = 'asc') => {
    const sortedData = [...products].sort((a, b) => {
      if (order === 'asc') {
        return type.toLowerCase() === 'price' ? a.price - b.price : a.name.localeCompare(b.name);
      } else {
        return type.toLowerCase() === 'price' ? b.price - a.price : b.name.localeCompare(a.name);
      }
    });
    setProducts(sortedData);
  }, [products]);

  /** Filter items by money and search bar by name */
  const filteredData = products
    ?.filter((item) => item.price >= minValue && item.price <= maxValue)
    .filter((product) => product.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()));

  return (
    <>
      <FilterBar
        handleInputChange={handleInputChange}
        inputValue={inputValue}
        sortData={sortData}
      />

      <SliderRange
        min={min!}
        max={max!}
        maxValue={maxValue}
        minValue={minValue}
        handleInput={handleInput}
      />

      <div
        className={cn("flex flex-wrap justify-between gap-3", {
          "justify-start": inputValue.length > 0,
        })}>
        {filteredData && filteredData?.length > 0 ? (
          filteredData?.map((data: any) => {
            return <ProductItem key={data.id} data={data} />;
          })
        ) : inputValue.length > 0 ? (
          <NoData title="Please search again" />
        ) : (
          <NoData title="No Data available" />
        )}
      </div>
    </>
  )
}

export default HomeContent