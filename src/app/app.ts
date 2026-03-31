import { Component } from '@angular/core';
import { ProdutoViewComponent } from './components/produto-form/produto-view.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProdutoViewComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }