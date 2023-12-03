import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  description?: string | null;
  products?: ProductWhereUniqueInput | null;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
};
