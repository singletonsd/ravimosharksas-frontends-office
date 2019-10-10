// tslint:disable-next-line:no-implicit-dependencies
import { environment } from '@env/environment';
import { Configuration, ConfigurationParameters } from '@ravimosharksas/apis-contract-libs-typescript';

// tslint:disable-next-line: only-arrow-functions
export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: environment.apiRavimoContract.API_BASE_PATH
  };

  return new Configuration(params);
}
