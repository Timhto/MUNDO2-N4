import { Injectable } from '@angular/core';
import Editora from './editora';

@Injectable()
export class ControleEditoraService {
  editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Credo!' },
    { codEditora: 2, nome: 'Zé da manga' },
    { codEditora: 3, nome: 'vixi!' }
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }
}
