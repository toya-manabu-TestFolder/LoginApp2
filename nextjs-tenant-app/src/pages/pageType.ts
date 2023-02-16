export type Option = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export type Item = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  deleted: boolean;
  options: Option[];
};
