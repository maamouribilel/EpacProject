import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/sharedComponents/header/header.component';
import { FooterComponent } from './components/sharedComponents/footer/footer.component';
import { NotFoundComponent } from './components/sharedComponents/not-found/not-found.component';
import { LoadingSpinnerComponent } from './components/sharedComponents/loading-spinner/loading-spinner.component';
import { DashboardComponent } from './components/mainComponents/dashboard/dashboard.component';
import { OrdersComponent } from './components/mainComponents/orders/orders.component';
import { SchedulingComponent } from './components/mainComponents/scheduling/scheduling.component';
import { StationsComponent } from './components/mainComponents/stations/stations.component';
import { ShippingComponent } from './components/mainComponents/shipping/shipping.component';
import { ReportsComponent } from './components/mainComponents/reports/reports.component';
import { ConfigurationsComponent } from './components/mainComponents/configurations/configurations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LoadingSpinnerComponent,
    DashboardComponent,
    OrdersComponent,
    SchedulingComponent,
    StationsComponent,
    ShippingComponent,
    ReportsComponent,
    ConfigurationsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
