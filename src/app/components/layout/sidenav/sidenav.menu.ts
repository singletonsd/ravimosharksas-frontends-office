// tslint:disable: no-implicit-dependencies
import { appRoutesNames } from '@app/app.routes.names';

export interface NavOptions {
  route: String;
  queryParams?: {};
  title: String;
  icon: String;
}

export interface NavMenu {
  routes: Array<NavOptions>;
  name: String;
  accessLevel: Array<number>;
  opened?: boolean;
  icon?: String;
}

export const SIDE_NAV_MENU: Array<NavMenu> = [
  {
    name: 'trips', accessLevel: [0, 1, 2], icon: 'directions_bus', routes: [
      { route: appRoutesNames.JOURNEY.ADD, title: 'add', icon: 'directions_bus' },
      { route: appRoutesNames.JOURNEY.MAIN, title: 'list', icon: 'local_library' },
      { route: appRoutesNames.JOURNEY.MAIN, queryParams: { filter: 'transit' }, title: 'transit', icon: 'directions_run' },
      { route: appRoutesNames.JOURNEY.MAIN, queryParams: { filter: 'finished' }, title: 'finished', icon: 'flag' }]
  },
  {
    name: 'dispatches', accessLevel: [0, 1, 2], icon: 'directions_bus', routes: [
      { route: appRoutesNames.DELIVERY.ADD, title: 'add', icon: 'add_circle_outline' },
      { route: appRoutesNames.DELIVERY.MAIN, title: 'list', icon: 'link' },
      { route: appRoutesNames.DELIVERY.MAIN, queryParams: { filter: 'transit' }, title: 'transit', icon: 'flight' },
      { route: appRoutesNames.DELIVERY.MAIN, queryParams: { filter: 'finished' }, title: 'finished', icon: 'beenhere' },
      { route: appRoutesNames.DELIVERY.MAIN, queryParams: { filter: 'claimed' }, title: 'claimed', icon: 'traffic' }]
  },
  {
    name: 'users', accessLevel: [0, 1, 2], icon: 'directions_bus', routes: [
      { route: appRoutesNames.USER.ADMIN.ADD, title: 'add', icon: 'person_add' },
      { route: appRoutesNames.USER.ADMIN.MAIN, title: 'list', icon: 'recent_actors' }]
  },
  {
    name: 'accounts', accessLevel: [0, 1, 2], icon: 'directions_bus', routes: [
      { route: appRoutesNames.ACCOUNT.ADD, title: 'add', icon: 'chat' },
      { route: appRoutesNames.ACCOUNT.MAIN, title: 'list', icon: 'forum' }]
  },
  {
    name: 'transports', accessLevel: [0, 1, 2], icon: 'directions_bus', routes: [
      { route: appRoutesNames.CARRIER.ADD, title: 'add', icon: 'local_hospital' },
      { route: appRoutesNames.CARRIER.MAIN, title: 'list', icon: 'local_shipping' }]
  },
  {
    name: 'storehouses', accessLevel: [0, 1, 2], icon: 'directions_bus', routes: [
      { route: appRoutesNames.LOCATION.ADD, title: 'add', icon: 'add_location' },
      { route: appRoutesNames.LOCATION.MAIN, title: 'list', icon: 'place' }]
  },
  {
    name: 'actions', accessLevel: [3], icon: 'directions_bus', routes: [
      { route: appRoutesNames.USER.MY.JOURNEY, title: 'my.dispatches', icon: 'merge_type' },
      { route: appRoutesNames.USER.MY.DELIVERY, title: 'my.packages', icon: 'insert_chart_outlined' },
      { route: appRoutesNames.USER.MY.ACCOUNT, title: 'my.accounts', icon: 'devices_other' }]
  },
  {
    name: 'settings', accessLevel: [0, 1, 2, 3], icon: 'directions_bus', routes: [
      { route: appRoutesNames.USER.PASSWORD.CHANGE, title: 'password', icon: 'security' }
    , { route: appRoutesNames.USER.EMAIL.CHANGE, title: 'email', icon: 'security' }
    // , { route: appRoutesNames.USER.EMAIL.SUBSCRIPT, title: 'subscriptions', icon: 'email' }
    ]
  }
];
