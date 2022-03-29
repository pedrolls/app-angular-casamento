import { MuralComponent } from './mural/mural.component';
import { EnviarMensagemComponent } from './enviar-mensagem/enviar-mensagem.component';
import { PadrinhosComponent } from './padrinhos/padrinhos.component';
import { SobreOsNoivosComponent } from './sobre-os-noivos/sobre-os-noivos.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home/sobre-os-noivos', component: SobreOsNoivosComponent },
  { path: 'home/padrinhos-madrinhas', component: PadrinhosComponent },
  { path: 'home/enviar-mensagem', component: EnviarMensagemComponent },
  { path: 'home/mural', component: MuralComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
