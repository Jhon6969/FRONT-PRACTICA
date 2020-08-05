import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {appRoutes} from './appRoutes.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ComidaComponent } from './components/comida/comida.component';
import { CategoriaComponent } from './components/comida/categoria/categoria.component';
import { CategoriaRegistrarComponent } from './components/comida/categoria-registrar/categoria-registrar.component';
import { CategoriaActualizarComponent } from './components/comida/categoria-actualizar/categoria-actualizar.component';
import { PlatilloComponent } from './components/comida/platillo/platillo.component';
import { PlatilloRegistrarComponent } from './components/comida/platillo-registrar/platillo-registrar.component';
import { PlatilloActualizarComponent } from './components/comida/platillo-actualizar/platillo-actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ComidaComponent,
    CategoriaComponent,
    CategoriaRegistrarComponent,
    CategoriaActualizarComponent,
    PlatilloComponent,
    PlatilloRegistrarComponent,
    PlatilloActualizarComponent
  ],
  imports: [
    BrowserModule,
    appRoutes,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
