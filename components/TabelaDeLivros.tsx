
import styled from "styled-components";
import Livro from "../types/Livro";

interface TabelaDeLivrosProps {
  livros: Livro[];
  deletar: (id: string) => void;
  editar: (id: string) => void;
  detalhar: (livro: Livro) => void;
  mostraDetalhes: boolean;
  modoEdicao?: boolean;
}

const Carrossel = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;
  margin-top: 20px;
  gap: 20px;
  padding: 0 10px;
`;

const LivroCard = styled.div`
  flex: 0 0 200px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const BotaoCadastrarNovo = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

function TabelaDeLivros({
  livros,
  deletar,
  editar,
  detalhar,
  mostraDetalhes,
  modoEdicao,
}: TabelaDeLivrosProps) {
  return (
    <>
      {livros.length > 0 && mostraDetalhes === false ? (
        <Carrossel>
          {livros.map((livro, index) => (
            <LivroCard key={index}>
              <p>{livro.titulo}</p>
              <p>{livro.autor}</p>
              <p>{livro.anoPublicacao}</p>
              <div>
                <button onClick={() => deletar(livro.id)} disabled={modoEdicao}>
                  Excluir
                </button>
                <button onClick={() => editar(livro.id)}>Editar</button>
                <button onClick={() => detalhar(livro)}>Detalhes</button>
              </div>
            </LivroCard>
          ))}
        </Carrossel>
      ) : null}
    </>
  );
}

export default TabelaDeLivros;
