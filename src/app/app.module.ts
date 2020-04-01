import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CollectionListComponent } from './components/collection/list/list';
import { CollectionDetailComponent } from './components/collection/detail/detail';
import { CollectionItemComponent } from './components/collection/item/item';
import localeNl from '@angular/common/locales/nl';
import localeNlExtra from '@angular/common/locales/extra/nl';
import { UsecaseItemComponent } from './components/usecase/item/item';
import { UsecaseDetailComponent } from './components/usecase/detail/detail';
import { HeaderComponent } from './components/header/header';
import { SearchComponent } from './components/search/search';

registerLocaleData(localeNl, 'nl-NL', localeNlExtra);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    UsecaseDetailComponent,
    CollectionListComponent,
    CollectionDetailComponent,
    CollectionItemComponent,
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
