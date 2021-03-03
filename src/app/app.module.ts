import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { StatsModule } from './stats/stats.module';
import { LoginModule } from './login/login.module';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
  //  StatsModule,
    LoginModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [{provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'}, {provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
