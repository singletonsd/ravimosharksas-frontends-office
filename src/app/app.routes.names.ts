export const appRoutesNames = {
  ROOT: '/',
  DOCS: '/docs',
  ABOUT: 'about',
  CONTACT: 'contact',
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
      SUBSCRIPT: 'user/email/subscript',
      REQUEST: 'user/email/request',
      CHANGE: 'user/email/change'
    },
    LOGIN: 'user/login',
    REGISTER: 'user/register',
    SETTINGS: 'user/settings',
    ADMIN: {
      ADD: 'user/admin/add',
      MAIN: 'user/admin/main'
    },
    MY: {
      ACCOUNT: 'user/my/account',
      JOURNEY: 'user/my/journey',
      DELIVERY: 'user/my/delivery'
    }
  },
  JOURNEY: {
    ADD: 'journey/add',
    MAIN: 'journey/main'
  },
  DELIVERY: {
    ADD: 'delivery/add',
    MAIN: 'delivery/main'
  },
  ACCOUNT: {
    ADD: 'account/add',
    MAIN: 'account/main'
  },
  CARRIER: {
    ADD: 'carrier/add',
    MAIN: 'carrier/main'
  },
  LOCATION: {
    ADD: 'location/add',
    MAIN: 'location/main'
  },
  MEMBERSHIP: {
    ADD: 'membership/add',
    MAIN: 'membership/main'
  },
  TRACKING: {
    PACKAGE: 'tracking/package'
  }
};
