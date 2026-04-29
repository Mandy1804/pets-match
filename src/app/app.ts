import { Component } from '@angular/core';
import { PetFormComponent } from './components/pet-form/pet-form.component';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';
import { ProdutoViewComponent } from './components/produto-view/produto-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PetFormComponent, ProdutoFormComponent, ProdutoViewComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }