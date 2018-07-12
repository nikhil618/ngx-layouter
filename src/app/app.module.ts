import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routes';
import {AppNgxBootstrapModule} from './app-bootstrap/app-ngx-bootstrap.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, AppRoutingModule, AppNgxBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
