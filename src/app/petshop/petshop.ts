import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-petshop',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './petshop.html',
  styleUrl: './petshop.css'
})
export class Petshop {

  pets = [
    { id: 1, nome: 'Rex', tipo: 'Cachorro', raca: 'Labrador', idade: 3 },
    { id: 2, nome: 'Mia', tipo: 'Gato', raca: 'Siamês', idade: 2 }
  ];

  novoPet = {
    nome: '',
    tipo: '',
    raca: '',
    idade: 0
  };

  petSelecionado: any = null;
  proximoId = 3;

  adicionar() {
    if (!this.novoPet.nome || !this.novoPet.tipo) return;

    this.pets.push({
      id: this.proximoId++,
      ...this.novoPet
    });

    this.novoPet = { nome: '', tipo: '', raca: '', idade: 0 };
  }

  deletar(id: number) {
    this.pets = this.pets.filter(p => p.id !== id);
  }

  editar(pet: any) {
    this.petSelecionado = { ...pet };
  }

  atualizar() {
    const index = this.pets.findIndex(p => p.id === this.petSelecionado.id);

    if (index !== -1) {
      this.pets[index] = this.petSelecionado;
    }

    this.petSelecionado = null;
  }

  cancelar() {
    this.petSelecionado = null;
  }
}