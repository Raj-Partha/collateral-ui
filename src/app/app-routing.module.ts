import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DefaultComponent } from './default/default.component';
import { AddCollateralComponent } from './add-collateral/add-collateral.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'default', component: DefaultComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'add-coll', component: AddCollateralComponent },
  { path: 'transactions', component: TransactionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
