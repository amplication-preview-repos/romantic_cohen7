import { Deployment as TDeployment } from "../api/deployment/Deployment";

export const DEPLOYMENT_TITLE_FIELD = "url";

export const DeploymentTitle = (record: TDeployment): string => {
  return record.url?.toString() || String(record.id);
};
