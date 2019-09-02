import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../components/mainComponents/dashboard/dashboard.component';
import { OrdersComponent } from '../components/mainComponents/orders/orders.component';
import { SchedulingComponent } from '../components/mainComponents/scheduling/scheduling.component';
import { StationsComponent } from '../components/mainComponents/stations/stations.component';
import { ShippingComponent } from '../components/mainComponents/shipping/shipping.component';
import { ReportsComponent } from '../components/mainComponents/reports/reports.component';
import { ConfigurationsComponent } from '../components/mainComponents/configurations/configurations.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'shcheduling', component: SchedulingComponent },
  { path: 'stations', component: StationsComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'configurations', component: ConfigurationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
