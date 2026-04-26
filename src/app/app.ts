import { Component } from '@angular/core';
import { Petshop } from './petshop/petshop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Petshop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}