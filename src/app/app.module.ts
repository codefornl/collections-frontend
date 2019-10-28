import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CbaseListComponent } from './cbase/cbase-list.component'; 
import { CbaseDetailComponent } from './cbase/cbase-detail.component';
import { CbaseItemComponent } from './cbase/cbase-item.component';
import localeNl from '@angular/common/locales/nl';
import localeNlExtra from '@angular/common/locales/extra/nl';
import { UsecaseItemComponent } from './usecase/usecase-item.component';
import { UsecaseDetailComponent } from './usecase/usecase-detail.component';
registerLocaleData(localeNl, 'nl-NL', localeNlExtra);
@NgModule({
  declarations: [
    AppComponent,
    UsecaseDetailComponent,
    CbaseDetailComponent,
    CbaseListComponent,
    CbaseItemComponent,
    UsecaseItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
