import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  branch?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  repositoryUrl?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
