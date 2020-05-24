import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroSearchComponent } from './components/hero-search/sujeto-search.component';

// RUTAS

import { APP_ROUTING } from './app.routes';


// SERVICIOS

import { SujetoService } from './service/superpowerful.service';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { VillainsComponent } from './components/villains/villains.component';
import { VillianCardComponent } from './components/villian-card/villian-card.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroDetailsComponent,
    HeroSearchComponent,
    HeroCardComponent,
    VillainsComponent,
    VillianCardComponent    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    SujetoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
