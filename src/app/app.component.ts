import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) { }

  title = 'casamento';

  redirectHome(): void{
    this.router.navigateByUrl('/home');
  }

  redirectSobreOsNoivos(): void{
    this.router.navigateByUrl('/home/sobre-os-noivos');
  }

  redirectPadrinhos(): void{
    this.router.navigateByUrl('home/padrinhos-madrinhas');
  }

  redirectEnviarMsg(): void{
    this.router.navigateByUrl('home/enviar-mensagem');
  }

  redirectMural(): void{
    this.router.navigateByUrl('home/mural');
  }
}
