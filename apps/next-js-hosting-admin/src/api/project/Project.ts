import { Deployment } from "../deployment/Deployment";
import { User } from "../user/User";

export type Project = {
  branch: string | null;
  createdAt: Date;
  deployments?: Array<Deployment>;
  description: string | null;
  id: string;
  name: string | null;
  repositoryUrl: string | null;
  updatedAt: Date;
  user?: User | null;
};
