// tslint:disable-next-line:no-implicit-dependencies
import { environment } from '@env/environment';
import { Configuration as ConfigurationClient
  , ConfigurationParameters as ConfigurationParametersClient } from '@ravimosharksas/apis-client-libs-typescript';
import { Configuration as ConfigurationContract
  , ConfigurationParameters as ConfigurationParametersContract } from '@ravimosharksas/apis-contract-libs-typescript';
import { Configuration as ConfigurationTask
  , ConfigurationParameters as ConfigurationParametersTask } from '@ravimosharksas/apis-task-libs-typescript';

// tslint:disable: only-arrow-functions
export function apiContractConfigFactory(): ConfigurationContract {
  const params: ConfigurationParametersContract = {
    basePath: environment.apiRavimoContract.API_BASE_PATH
  };

  return new ConfigurationContract(params);
}

export function apiTaskConfigFactory(): ConfigurationTask {
  const params: ConfigurationParametersTask = {
    basePath: environment.apiRavimoTask.API_BASE_PATH
  };

  return new ConfigurationTask(params);
}

export function apiClientConfigFactory(): ConfigurationClient {
  const params: ConfigurationParametersClient = {
    basePath: environment.apiRavimoClient.API_BASE_PATH
  };

  return new ConfigurationClient(params);
}
