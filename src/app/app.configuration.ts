// tslint:disable-next-line:no-implicit-dependencies
import { environment } from '@env/environment';
import { Configuration, ConfigurationParameters } from '@ravimosharksas/apis-contract-libs-typescript';

// tslint:disable: only-arrow-functions
export function apiContractConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: environment.apiRavimoContract.API_BASE_PATH
  };

  return new Configuration(params);
}

export function apiTaskConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: environment.apiRavimoTask.API_BASE_PATH
  };

  return new Configuration(params);
}
