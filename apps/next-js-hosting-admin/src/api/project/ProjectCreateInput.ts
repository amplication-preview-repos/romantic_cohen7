import { DeploymentCreateNestedManyWithoutProjectsInput } from "./DeploymentCreateNestedManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  branch?: string | null;
  deployments?: DeploymentCreateNestedManyWithoutProjectsInput;
  description?: string | null;
  name?: string | null;
  repositoryUrl?: string | null;
  user?: UserWhereUniqueInput | null;
};
