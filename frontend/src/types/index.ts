export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface ICartContext {
  handleAddCart: (product: IProduct) => void;
  cart: IProduct[];
  handleRemoveItem: (id: number) => void;
}

export interface ISortSelectProps {
  sortFunction: (type: 'price' | 'name', order: 'asc' | 'des') => void;
  sortType: "price" | "name";
  placeholder: string;
  selectItem: {
    value: string;
    label: string;
  }[];
}

export interface IFilterBarProps {
  handleInputChange: (value: string) => void;
  inputValue: string;
  sortData: (type: "price" | "name", order: "asc" | "des") => void;
}