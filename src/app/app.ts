import { Component } from '@angular/core';
import { PetFormComponent } from './components/pet-form/pet-form.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PetFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }