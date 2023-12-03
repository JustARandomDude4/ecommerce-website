import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors?: InputJsonValue;
  description?: InputJsonValue;
  discountPrice?: number | null;
  images?: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  review?: ReviewWhereUniqueInput | null;
  salePrice?: number | null;
  title: string;
  variants?: InputJsonValue;
};
