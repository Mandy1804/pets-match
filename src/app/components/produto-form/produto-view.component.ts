import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-view.component.html',
  styleUrl: './produto-view.component.css'
})
export class ProdutoViewComponent {
 
  @Input() listaProdutos: any[] = [
    { nome: 'Shampoo', preco: 25, descricao: 'Shampoo para Filhote' },
    { nome: 'Condicionador', preco: 20, descricao: 'Condicionador para Filhote' }
  ];
}