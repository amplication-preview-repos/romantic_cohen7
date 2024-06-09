import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DeploymentWhereInput = {
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  status?: "Option1";
  timestamp?: DateTimeNullableFilter;
  url?: StringNullableFilter;
};
