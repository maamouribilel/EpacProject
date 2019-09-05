import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// angular material module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// forms modules
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// routing module
import { AppRoutingModule } from './modules/app-routing.module';

// components
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
// angular material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
// http modules
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { TranslationModule, HttpLoaderFactory } from './modules/translate/translate.module';
// translation modules
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// factory
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


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
  imports: [BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,  // material
    TranslateModule.forRoot({
      loader: {
        provide : TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
   // TranslationModule // translation module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
