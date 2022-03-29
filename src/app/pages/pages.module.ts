import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialAppModule } from '../shared/material-app/material-app.module';
import { SobreOsNoivosComponent } from './sobre-os-noivos/sobre-os-noivos.component';
import { PadrinhosComponent } from './padrinhos/padrinhos.component';

@NgModule({
  declarations: [
    HomeComponent,
    SobreOsNoivosComponent,
    PadrinhosComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialAppModule
  ]
})
export class PagesModule { }
