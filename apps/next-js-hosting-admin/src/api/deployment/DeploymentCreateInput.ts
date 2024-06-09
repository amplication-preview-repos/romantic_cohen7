import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type DeploymentCreateInput = {
  project?: ProjectWhereUniqueInput | null;
  status?: "Option1" | null;
  timestamp?: Date | null;
  url?: string | null;
};
