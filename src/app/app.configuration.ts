import { Configuration, ConfigurationParameters } from '@ravimosharksas/apis-contract-libs-typescript';

// tslint:disable-next-line: only-arrow-functions
export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
  };

  return new Configuration(params);
}
