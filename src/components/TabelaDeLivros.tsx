import { styled } from "styled-components";
import Livro from "../types/Livro";

interface TabelaDeLivrosProps {
  livros: Livro[];
  deletar: (id: string) => void;
  editar: (id: string) => void;
  detalhar: (livro: Livro) => void;
  mostraDetalhes: boolean;
  modoEdicao?: boolean;
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px 12px;
`;

const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 8px 12px;
`;

const StyledTr = styled.tr`
  &:hover {
    background-color: #f5f5f5;
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
        <StyledTable>
          <thead>
            <StyledTr>
              <StyledTh>Título</StyledTh>
              <StyledTh>Autor</StyledTh>
              <StyledTh>Ano de publicação</StyledTh>
              <StyledTh>Ações</StyledTh>
            </StyledTr>
          </thead>
          <tbody>
            {livros.map((livro, index) => (
              <StyledTr key={index}>
                <StyledTd>{livro.titulo}</StyledTd>
                <StyledTd>{livro.autor}</StyledTd>
                <StyledTd>{livro.anoPublicacao}</StyledTd>
                <StyledTd>
                  <button onClick={() => deletar(livro.id)} disabled={modoEdicao}>Excluir</button>
                  <button onClick={() => editar(livro.id)}>Editar</button>
                  <button onClick={() => detalhar(livro)}>Detalhes</button>
                </StyledTd>
              </StyledTr>
            ))}
          </tbody>
        </StyledTable>
      ) : null}
    </>
  )
}

export default TabelaDeLivros;