import { Injectable } from '@angular/core';
import Livro from './livro';

@Injectable()
export class ControleLivrosService {
  livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'O rei careca', resumo: 'Lorem ipsum dolor sit amet. ', autores: ['Eu', 'Ela'] },
    { codigo: 2, codEditora: 2, titulo: 'Jão cagadão', resumo: 'Odio tempor orci dapibus ultrices in iaculis.', autores: ['Ela', 'Eu'] },
    { codigo: 3, codEditora: 1, titulo: 'Leia um livro', resumo: 'Odio ut sem nulla pharetra diam', autores: ['Eu', 'Eu'] }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
