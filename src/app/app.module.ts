import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { UserComponent } from './components/user/user.component';
import { CarteVisiteComponent } from './components/carte-visite/carte-visite.component';
import { AlerteButtonComponent } from './components/alerte-button/alerte-button.component';
import { ListeComponent } from './components/liste/liste.component';
import { MagieComponent } from './components/magie/magie.component';
import { ListeFiltreeComponent } from './components/liste-filtree/liste-filtree.component';
import { ButtonMenuComponent } from './components/button-menu/button-menu.component';
import { GenericAlertButtonComponent } from './components/generic-alert-button/generic-alert-button.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    UserComponent,
    CarteVisiteComponent,
    AlerteButtonComponent,
    ListeComponent,
    MagieComponent,
    ListeFiltreeComponent,
    ButtonMenuComponent,
    GenericAlertButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
