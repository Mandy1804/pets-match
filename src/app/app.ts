import { Component } from '@angular/core';
import { PetshopComponent } from './petshop/petshop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PetshopComponent],
  template: '<app-petshop></app-petshop>'
})
export class AppComponent {}