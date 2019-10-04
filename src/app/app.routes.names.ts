export const appRoutesNames = {
  ROOT: '',
  DOCS: '/docs',
  HOME: 'home',
  REPORT: 'report',
  NOT: {
    ACCESS: 'not-access',
    AVAILABLE: 'not-available',
    FOUND: '**'
  },
  USER: {
    PASSWORD: {
      CHANGE: 'user/password/change',
      FORGOT: 'user/password/forgot'
    },
    EMAIL: {
      CHANGE: 'user/email/change'
    },
    LOGIN: 'user/login',
    REGISTER: 'user/register',
    SETTINGS: 'user/settings',
    ADD: 'user/admin/add',
    MAIN: 'user/admin/main'
  },
  TASKS: {
    ADD: 'tasks/add',
    MAIN: 'tasks/main',
    STATE: 'tasks/state'
  },
  CLIENTS: {
    ADD: 'clients/add',
    MAIN: 'clients/main',
    BLOCK: 'clients/block'
  },
  ADDRESSES: {
    ADD: 'addresses/add',
    MAIN: 'addresses/main'
  },
  CONTRACTS: {
    ADD: 'contracts/add',
    MAIN: 'contracts/main',
    REVIEW: 'contracts/review'
  },
  MACHINES: {
    ADD: 'machines/add',
    MAIN: 'carrier/main'
  },
  PIECES: {
    ADD: 'location/add',
    MAIN: 'location/main'
  }
};
