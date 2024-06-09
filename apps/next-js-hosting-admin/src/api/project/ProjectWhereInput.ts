import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DeploymentListRelationFilter } from "../deployment/DeploymentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectWhereInput = {
  branch?: StringNullableFilter;
  deployments?: DeploymentListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  repositoryUrl?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
