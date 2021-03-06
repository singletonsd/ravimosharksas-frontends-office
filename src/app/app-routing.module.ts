import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutesNames } from './app.routes.names';

import { MainNotAccessComponent } from './components/pages/not-access/not-access.component';
import { MainNotAvailableComponent } from './components/pages/not-available/not-available.component';
import { MainNotFoundComponent } from './components/pages/not-found/not-found.component';

import { HomeComponent } from './components/pages/home/home.component';

import { AddressesAddComponent } from './components/pages/addresses/addresses-add/addresses-add.component';
import { AddressesMainComponent } from './components/pages/addresses/addresses-main/addresses-main.component';

import { ClientsAddComponent } from './components/pages/clients/clients/clients-add/clients-add.component';
import { ClientsMainComponent } from './components/pages/clients/clients/clients-main/clients-main.component';

// import { ContractsAddComponent } from './components/pages/contracts/contracts-add/contracts-add.component';
import { ContractsMainComponent } from './components/pages/contracts/contracts-main/contracts-main.component';
import { ContractsReviewComponent } from './components/pages/contracts/contracts-review/contracts-review.component';

import { MachinesAddComponent } from './components/pages/machines/machines-add/machines-add.component';

import { PagesTasksAddComponent } from './components/pages/tasks/pages-tasks-add/pages-tasks-add.component';
import { PagesTasksMainComponent } from './components/pages/tasks/pages-tasks-main/pages-tasks-main.component';

const routes: Routes = [
  { path: appRoutesNames.ADDRESSES.MAIN, component: AddressesMainComponent },
  { path: appRoutesNames.ADDRESSES.ADD, component: AddressesAddComponent },
  { path: appRoutesNames.CLIENTS.MAIN, component: ClientsMainComponent },
  { path: appRoutesNames.CLIENTS.ADD, component: ClientsAddComponent },
  { path: appRoutesNames.CONTRACTS.MAIN, component: ContractsMainComponent },
  { path: appRoutesNames.CONTRACTS.REVIEW, component: ContractsReviewComponent },
  // { path: appRoutesNames.CONTRACTS.ADD, component: ContractsAddComponent },
  { path: appRoutesNames.MACHINES.ADD, component: MachinesAddComponent },
  { path: appRoutesNames.ROOT, redirectTo: '/home', pathMatch: 'full' },
  { path: appRoutesNames.HOME, component: HomeComponent },
  { path: appRoutesNames.TASKS.ADD, component: PagesTasksAddComponent },
  { path: appRoutesNames.TASKS.MAIN, component: PagesTasksMainComponent },
  { path: appRoutesNames.NOT.ACCESS, component: MainNotAccessComponent },
  { path: appRoutesNames.NOT.AVAILABLE, component: MainNotAvailableComponent },
  { path: appRoutesNames.NOT.FOUND, component: MainNotFoundComponent }// Always the last route.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
