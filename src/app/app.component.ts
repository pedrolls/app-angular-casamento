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
    this.router.navigateByUrl('/home/sobre-os-noivos')
  }
}
