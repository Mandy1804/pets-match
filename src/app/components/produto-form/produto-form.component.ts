import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.css'
})

export class ProdutoFormComponent implements OnInit { 
  produtoForm!: FormGroup; 
  produtos: any[] = [];

  ngOnInit() {
 
    this.produtoForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      preco: new FormControl(0, [Validators.required]),
      descricao: new FormControl('')
    });
  }

  onSubmit() {
    if (this.produtoForm.valid) {
      this.produtos.push(this.produtoForm.value); 
      this.produtoForm.reset({ preco: 0 });
    }
  }
}