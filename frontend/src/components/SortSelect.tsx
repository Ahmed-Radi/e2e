"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ISortSelectProps } from "@/types";
import { memo } from "react";

const SortSelect = ({ sortFunction, sortType, placeholder, selectItem }: ISortSelectProps) => {
  return (
    <Select
      onValueChange={(event: any) =>
        sortFunction(sortType, event)
      }>
      <SelectTrigger className='w-full md:w-[150px]'>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {selectItem.map(({ value, label }) => (
          <SelectItem value={value} key={value}>{label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default memo(SortSelect)