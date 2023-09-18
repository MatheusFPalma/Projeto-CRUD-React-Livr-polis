import React from 'react';
import Livro from '../types/Livro';
import styles from './BibliotecaScreen.module.css';

interface BibliotecaScreenProps {
  livros: Livro[];
}

const BibliotecaScreen: React.FC<BibliotecaScreenProps> = ({ livros }) => {
  return (
    <div className={styles.container}>
      <h2>Biblioteca</h2>
      {livros.length === 0 ? (
        <p>A biblioteca está vazia.</p>
      ) : (
        <div className={styles.bibliotecaLivros}>
          {livros.map((livro) => (
            <div key={livro.id} className={styles.card}>
              <h3>{livro.titulo}</h3>
              <p>Autor: {livro.autor}</p>
              <p>Ano de Publicação: {livro.anoPublicacao}</p>
              <p>Gênero: {livro.genero}</p>
              <button>Detalhar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BibliotecaScreen;
