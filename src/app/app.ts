import { Component } from '@angular/core';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProdutoFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }