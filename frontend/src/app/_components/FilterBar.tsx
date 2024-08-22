import SortSelect from "@/components/SortSelect";
import { Input } from "@/components/ui/input";
import { IFilterBarProps } from "@/types";

const FilterBar = ({
  handleInputChange,
  inputValue,
  sortData,
}: IFilterBarProps) => {
  return (
    <div className='flex gap-5 flex-col md:flex-row'>
      <Input
        className='w-full'
        placeholder='Filter by item name'
        onChange={event => handleInputChange(event.target.value)}
        value={inputValue}
      />
      <SortSelect
        sortFunction={sortData}
        sortType={"price"}
        placeholder={"Price"}
        selectItem={[
          { value: "default", label: "Price" },
          { value: "asc", label: "Asc" },
          { value: "des", label: "Desc" },
        ]}
      />
      <SortSelect
        sortFunction={sortData}
        sortType={"name"}
        placeholder={"Name"}
        selectItem={[
          { value: "default", label: "Price" },
          { value: "asc", label: "Asc" },
          { value: "des", label: "Desc" },
        ]}
      />
    </div>
  );
};

export default FilterBar;
