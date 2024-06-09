import { Project } from "../project/Project";

export type Deployment = {
  createdAt: Date;
  id: string;
  project?: Project | null;
  status?: "Option1" | null;
  timestamp: Date | null;
  updatedAt: Date;
  url: string | null;
};
