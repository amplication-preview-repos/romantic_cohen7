import { SortOrder } from "../../util/SortOrder";

export type DeploymentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  status?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
