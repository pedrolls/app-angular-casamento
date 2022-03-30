import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-enviar-mensagem',
  templateUrl: './enviar-mensagem.component.html',
  styleUrls: ['./enviar-mensagem.component.scss']
})
export class EnviarMensagemComponent implements OnInit {

  public email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor() {

  }

  ngOnInit(): void {
  }

  getErrorMessage() {

    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
