import { DeploymentUpdateManyWithoutProjectsInput } from "./DeploymentUpdateManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  branch?: string | null;
  deployments?: DeploymentUpdateManyWithoutProjectsInput;
  description?: string | null;
  name?: string | null;
  repositoryUrl?: string | null;
  user?: UserWhereUniqueInput | null;
};
