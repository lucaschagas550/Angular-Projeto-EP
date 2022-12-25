import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {

  public contadorClique: number = 0;
  public urlImagem: String = 'https://angular.io/assets/images/logos/angular/angular.png';
  public nome: String = '';

  adicionarClique(): void {
    this.contadorClique++;
  }

  zerarContador(): void {
    this.contadorClique = 0;
  }

  // KeyUp(event: any): void {
  //   console.log(event);
  //   this.nome = event.target.value;
  // }
}
