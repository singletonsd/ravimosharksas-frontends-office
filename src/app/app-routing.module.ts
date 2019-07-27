import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutesNames } from './app.routes.names';

import { MainNotAccessComponent } from './components/pages/not-access/not-access.component';
import { MainNotAvailableComponent } from './components/pages/not-available/not-available.component';
import { MainNotFoundComponent } from './components/pages/not-found/not-found.component';

import { HomeComponent } from './components/pages/home/home.component';

import { AddressesAddComponent } from './components/pages/addresses/addresses-add/addresses-add.component';
import { AddressesMainComponent } from './components/pages/addresses/addresses-main/addresses-main.component';

const routes: Routes = [
  { path: appRoutesNames.ADDRESSES.MAIN, component: AddressesMainComponent },
  { path: appRoutesNames.ADDRESSES.ADD, component: AddressesAddComponent },
  { path: appRoutesNames.ROOT, redirectTo: '/home', pathMatch: 'full' },
  { path: appRoutesNames.HOME, component: HomeComponent },
  { path: appRoutesNames.NOT.ACCESS, component: MainNotAccessComponent },
  { path: appRoutesNames.NOT.AVAILABLE, component: MainNotAvailableComponent },
  { path: appRoutesNames.NOT.FOUND, component: MainNotFoundComponent }// Always the last route.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
