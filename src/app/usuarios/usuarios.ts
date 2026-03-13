import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Usuario {
  id: number;
  nome: string;
  email: string;
}

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.css']
})
export class Usuarios {

  usuarios: Usuario[] = [];

  usuario: Usuario = {
    id: 0,
    nome: '',
    email: ''
  };

  editando = false;

  salvar() {

    if (this.editando) {

      const index = this.usuarios.findIndex(u => u.id === this.usuario.id);

      if (index !== -1) {
        this.usuarios[index] = { ...this.usuario };
      }

      this.editando = false;

    } else {

      this.usuario.id = Date.now();
      this.usuarios.push({ ...this.usuario });

    }

    this.usuario = {
      id: 0,
      nome: '',
      email: ''
    };

  }

  editar(u: Usuario) {

    this.usuario = { ...u };
    this.editando = true;

  }

  excluir(id: number) {

    this.usuarios = this.usuarios.filter(u => u.id !== id);

  }

}