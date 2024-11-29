import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string = '';
  edad: number | null = null;
  resultado: string = '';

  constructor() {}

  evaluarEdad() {
    if (!this.nombre || this.edad === null) {
      this.resultado = 'Ingrese todos los campos.';
      return;
    }

    if (this.edad < 18) {
      this.resultado = `${this.nombre} es menor de edad.`;
    } else {
      this.resultado = `${this.nombre} es mayor de edad.`;
    }
  }
}
