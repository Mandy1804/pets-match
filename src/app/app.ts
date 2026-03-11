import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  petForm: FormGroup;
  pets: any[] = [];

  especies = [
    { nome: 'Cachorro', emoji: '🐶' },
    { nome: 'Gato', emoji: '🐱' },
    { nome: 'Passarinho', emoji: '🐦' },
    { nome: 'Coelho', emoji: '🐰' },
    { nome: 'Hamster', emoji: '🐹' }
  ];

  constructor(private fb: FormBuilder) {
    this.petForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      especie: ['', Validators.required]
    });
  }

  getAnimalIcon(): string {
    const selected = this.petForm.get('especie')?.value;
    const found = this.especies.find(e => e.nome === selected);
    return found ? found.emoji : '🐾';
  }



adicionarPet() {
  if (this.petForm.valid) {
 
    const dadosForm = this.petForm.value;
    const iconeAtual = this.getAnimalIcon();
    this.pets.push({
      nome: dadosForm.nome,
      especie: dadosForm.especie,
      icone: iconeAtual 
    });

    this.petForm.reset({ especie: '' });
  }
}
}
