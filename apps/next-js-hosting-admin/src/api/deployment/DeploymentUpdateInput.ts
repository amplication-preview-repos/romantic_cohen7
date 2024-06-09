import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type DeploymentUpdateInput = {
  project?: ProjectWhereUniqueInput | null;
  status?: "Option1" | null;
  timestamp?: Date | null;
  url?: string | null;
};
