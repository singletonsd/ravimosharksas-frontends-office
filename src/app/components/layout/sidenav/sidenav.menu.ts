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
    name: 'tasks', accessLevel: [0, 1, 2], icon: 'assignment_ind', routes: [
      { route: appRoutesNames.TASKS.ADD, title: 'add', icon: 'note_add' },
      { route: appRoutesNames.TASKS.MAIN, title: 'list', icon: 'assignment_returned' },
      { route: appRoutesNames.TASKS.MAIN, queryParams: { filter: 'unfinished' }, title: 'unfinished', icon: 'assignment_late' },
      { route: appRoutesNames.TASKS.MAIN, queryParams: { filter: 'finished' }, title: 'finished', icon: 'assignment_turned_in' }
    ]
  },
  {
    name: 'clients', accessLevel: [0, 1, 2], icon: 'person', routes: [
      { route: appRoutesNames.CLIENTS.ADD, title: 'add', icon: 'person_add' },
      { route: appRoutesNames.CLIENTS.MAIN, title: 'list', icon: 'people' },
      { route: appRoutesNames.CLIENTS.MAIN, queryParams: { filter: 'blocked' }, title: 'blocked', icon: 'block' },
      { route: appRoutesNames.CLIENTS.MAIN, queryParams: { filter: 'unblocked' }, title: 'unblocked', icon: 'check_box' }
    ]
  },
  {
    name: 'addresses', accessLevel: [0, 1, 2], icon: 'contacts', routes: [
      { route: appRoutesNames.ADDRESSES.ADD, title: 'add', icon: 'message' },
      { route: appRoutesNames.ADDRESSES.MAIN, title: 'list', icon: 'forum' }
    ]
  },
  {
    name: 'contracts', accessLevel: [0, 1, 2], icon: 'insert_invitation', routes: [
      { route: appRoutesNames.CONTRACTS.ADD, title: 'add', icon: 'control_point' },
      { route: appRoutesNames.CONTRACTS.MAIN, title: 'list', icon: 'event_note' },
      { route: appRoutesNames.CONTRACTS.MAIN, queryParams: { filter: 'unfinished' }, title: 'unfinished', icon: 'event_available' },
      { route: appRoutesNames.CONTRACTS.MAIN, queryParams: { filter: 'finished' }, title: 'finished', icon: 'event_busy' }
    ]
  },
  {
    name: 'machines', accessLevel: [0, 1, 2], icon: 'local_laundry_service', routes: [
      { route: appRoutesNames.MACHINES.ADD, title: 'add', icon: 'plus_one' },
      { route: appRoutesNames.MACHINES.MAIN, title: 'list', icon: 'menu' }
    ]
  },
  {
    name: 'pieces', accessLevel: [0, 1, 2], icon: 'directions_bus', routes: [
      { route: appRoutesNames.PIECES.ADD, title: 'add', icon: 'local_hospital' },
      { route: appRoutesNames.PIECES.MAIN, title: 'list', icon: 'local_shipping' }
    ]
  },
  {
    name: 'users', accessLevel: [0, 1], icon: 'folder_shared', routes: [
      { route: appRoutesNames.USER.ADD, title: 'add', icon: 'create_new_folder' },
      { route: appRoutesNames.USER.MAIN, title: 'list', icon: 'folder' },
      { route: appRoutesNames.USER.MAIN, queryParams: { filter: 'technicians' }, title: 'technicians', icon: 'build' },
      { route: appRoutesNames.USER.MAIN, queryParams: { filter: 'clients' }, title: 'clients', icon: 'supervised_user_circle' },
      { route: appRoutesNames.USER.MAIN, queryParams: { filter: 'office' }, title: 'office', icon: 'business' }
    ]
  },
  {
    name: 'settings', accessLevel: [0, 1, 2, 3], icon: 'settings', routes: [
      { route: appRoutesNames.USER.PASSWORD.CHANGE, title: 'password', icon: 'security' }
    , { route: appRoutesNames.USER.EMAIL.CHANGE, title: 'email', icon: 'security' }
    ]
  }
];
