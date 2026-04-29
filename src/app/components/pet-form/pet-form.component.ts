import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pet-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pet-form.component.html',
  styleUrl: './pet-form.component.css'
})
export class PetFormComponent {
  pets: any[] = [];
  editandoIndex: number | null = null;

  petForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(2)]),
    especie: new FormControl('', Validators.required)
  });

  getAnimalIcon(especie?: string): string {
    const val = especie || this.petForm.get('especie')?.value as string;
    const icons: any = { 'cao': '🐶', 'gato': '🐱', 'ave': '🦜', 'coelho': '🐰' };
    return icons[val] || '🐾';
  }

  adicionar() {
    if (this.petForm.valid) {
      const novoPet = {
        nome: this.petForm.value.nome,
        especie: this.petForm.value.especie,
        icone: this.getAnimalIcon()
      };

      if (this.editandoIndex !== null) {
        this.pets[this.editandoIndex] = novoPet;
        this.editandoIndex = null;
      } else {
        this.pets.push(novoPet);
      }

      this.petForm.reset({ especie: '' });
    }
  }

  editar(index: number) {
    this.editandoIndex = index;
    const pet = this.pets[index];
    this.petForm.setValue({
      nome: pet.nome,
      especie: pet.especie
    });
  }

  deletar(index: number) {
    this.pets.splice(index, 1);
    if (this.editandoIndex === index) {
      this.editandoIndex = null;
      this.petForm.reset({ especie: '' });
    }
  }
}