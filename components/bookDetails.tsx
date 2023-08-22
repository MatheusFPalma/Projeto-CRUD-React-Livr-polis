import Livro from "../types/Livro";

interface BookDetailsProps {
    livro: Livro;
    onBack: () => void;
}

function BookDetails({ livro, onBack }: BookDetailsProps) {
    return (
        <div>
            <button onClick={onBack}>Voltar para a lista de livros</button>
            <h3>Detalhes do Livro:</h3>
            <p>Título: {livro.titulo}</p>
            <p>Autor: {livro.autor}</p>
            <p>Ano de Publicação: {livro.anoPublicacao}</p>
            <p>Gênero: {livro.genero}</p>
            <p>Descrição: {livro.descricao}</p>
        </div>
    );
}

export default BookDetails;
