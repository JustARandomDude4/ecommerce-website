import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  products?: ProductWhereUniqueInput;
  rating?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
