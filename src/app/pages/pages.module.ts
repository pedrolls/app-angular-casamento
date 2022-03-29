import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialAppModule } from '../shared/material-app/material-app.module';
import { SobreOsNoivosComponent } from './sobre-os-noivos/sobre-os-noivos.component';
import { PadrinhosComponent } from './padrinhos/padrinhos.component';
import { EnviarMensagemComponent } from './enviar-mensagem/enviar-mensagem.component';
import { MuralComponent } from './mural/mural.component';

@NgModule({
  declarations: [
    HomeComponent,
    SobreOsNoivosComponent,
    PadrinhosComponent,
    EnviarMensagemComponent,
    MuralComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialAppModule
  ]
})
export class PagesModule { }
