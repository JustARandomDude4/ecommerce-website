import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Product = {
  category?: Category | null;
  colors: JsonValue;
  createdAt: Date;
  description: JsonValue;
  discountPrice: number | null;
  id: string;
  images: JsonValue;
  order?: Order | null;
  review?: Review | null;
  salePrice: number | null;
  title: string;
  updatedAt: Date;
  variants: JsonValue;
};
