import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Pet {
  nome: string;
  tipo: string;
  preco: number;
  imagens: string[];
  imagemAtual: number;
}

@Component({
  selector: 'app-petshop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './petshop.html',
  styleUrls: ['./petshop.css']
})
export class PetshopComponent implements OnInit {

  pets: Pet[] = [
    {
      nome: 'Ração Premium',
      tipo: 'Alimentação',
      preco: 120,
      imagemAtual: 0,
      imagens: [
        'https://images.unsplash.com/photo-1589924691995-400dc9ecc119'
    
      ]
    },
    {
      nome: 'Brinquedo Mordedor',
      tipo: 'Acessório',
      preco: 35,
      imagemAtual: 0,
      imagens: [
        'https://images.unsplash.com/photo-1601758228041-f3b2795255f1'
      ]
    },
    {
  nome: 'Banho e Tosa',
  tipo: 'Serviço',
  preco: 60,
  imagemAtual: 0,
  imagens: [
    'https://placedog.net/500/300?id=12'
  ]
}
  ];

  ngOnInit() {
    setInterval(() => {
      this.pets.forEach(pet => {
        pet.imagemAtual =
          (pet.imagemAtual + 1) % pet.imagens.length;
      });
    }, 2000);
  }

  verDetalhes(pet: Pet) {
    alert('Detalhes: ' + pet.nome);
  }

  comprar(pet: Pet) {
    alert('Comprado: ' + pet.nome);
  }
}