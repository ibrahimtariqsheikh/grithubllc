type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
  size?: string[];
  category?: string;
  images?: string[];
  ratings?: number;
  reviews?: {
    user: string;
    rating: number;
    comment?: string;
    date: Date;
  }[];
  discount?:
    | number
    | {
        amount: number;
        type: "percentage" | "fixed";
      };
  brand?: string;
  SKU?: string;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
};
