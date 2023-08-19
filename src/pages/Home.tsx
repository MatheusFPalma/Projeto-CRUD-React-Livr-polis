import { useState } from "react";
import Livro from "../types/Livro";
import { v4 as uuid } from "uuid";
import InputStyled from "../components/InputStyled";
import TabelaDeLivros from "../components/TabelaDeLivros";

function Home() {

    const [livros, setLivros] = useState<Livro[]>([]);
    const [titulo, setTitulo] = useState<string>("");
    const [autor, setAutor] = useState<string>("");
    const [anoPublicacao, setAnoPublicacao] = useState<string>("");
    const [genero, setGenero] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [modoEdicao, setModoEdicao] = useState<string>("");
    const [cadastroConfirmado, setCadastroConfirmado] = useState<boolean>(false);
    const [mostrarModal, setMostrarModal] = useState<boolean>(false);
    const [livroParaExcluir, setLivroParaExcluir] = useState<Livro | null>(null);
    const [livroDetalhado, setLivroDetalhado] = useState<Livro | null>(null);
    const [exibirDetalhes, setExibirDetalhes] = useState(false);

    function limparEstados() {
        setTitulo("");
        setAutor("");
        setAnoPublicacao("");
        setGenero("");
        setDescricao("");
        setModoEdicao("");
    }

    function cadastrar() {
        const novoLivro: Livro = {
            id: uuid(),
            titulo,
            autor,
            anoPublicacao: Number(anoPublicacao),
            dataCadastro: Date().toString(),
            genero,
            descricao
        };
        setLivros([...livros, novoLivro]);
        limparEstados();
        setCadastroConfirmado(true);

        setTimeout(() => {
            setCadastroConfirmado(false);
        }, 5000)
    }

    function confirmarDelecao(id: string) {
        const livroExcluir: Livro | undefined = livros.find(livro => livro.id === id);
        if (livroExcluir !== undefined) {
            abrirModal(livroExcluir);
        }
    }

    function deletar(id: string) {
        const novaColecao = livros.filter((livro) => livro.id !== id);
        setLivros(novaColecao);
        limparEstados();
    }

    function editar(id: string) {
        const user = livros.find((livro) => livro.id === id);

        if (user) {
            setTitulo(user.titulo);
            setAutor(user.autor);
            setAnoPublicacao(`${user.anoPublicacao}`);
            setGenero(user.genero);
            setDescricao(user.descricao);
            setModoEdicao(id);
        }
    }

    function abrirModal(livro: Livro) {
        setMostrarModal(true);
        setLivroParaExcluir(livro);
    }

    function fecharModal() {
        setMostrarModal(false);
        setLivroParaExcluir(null);
    }

    function detalhar(livro: Livro) {
        setLivroDetalhado(livro);
        setExibirDetalhes(true);
    }

    function mostrarTabela() {
        setLivroDetalhado(null);
        setExibirDetalhes(false);
    }

    function clicarBotao(e: React.FormEvent) {
        e.preventDefault();

        if (!titulo || !autor || !anoPublicacao || !genero || !descricao) {
            alert("Todos os campos devem ser preenchidos.");
            return;
        }

        const anoAtual = new Date().getFullYear();
        if (parseInt(anoPublicacao) > anoAtual) {
            alert("O ano de publicação não pode ser no futuro");
            return;
        }

        if (!modoEdicao) {
            cadastrar();
        } else {
            const novosLivros = [...livros];

            const growdeverEdit = novosLivros.find((livro) => livro.id === modoEdicao);

            if (growdeverEdit) {
                growdeverEdit.titulo = titulo;
                growdeverEdit.autor = autor;
                growdeverEdit.anoPublicacao = Number(anoPublicacao);
                growdeverEdit.genero = genero;
                growdeverEdit.descricao = descricao;
            }

            setLivros(novosLivros);

            limparEstados();
        }
    }

    return (
        <>
            <h1>Acervo de livros da biblioteca de Livrópolis</h1>
            <InputStyled>
                <label htmlFor="titulo">Título:</label>
                <input
                    name="titulo"
                    placeholder="Título"
                    type="text"
                    onChange={(e) => setTitulo(e.target.value)}
                    value={titulo}
                />
                <label htmlFor="autor">Autor:</label>
                <input
                    name="autor"
                    placeholder="Autor"
                    type="text"
                    onChange={(e) => setAutor(e.target.value)}
                    value={autor}
                />
                <label htmlFor="ano">Ano de publicação:</label>
                <input
                    name="ano"
                    placeholder="Ano"
                    type="number"
                    onChange={(e) => setAnoPublicacao(e.target.value)}
                    value={anoPublicacao}
                />
                <label htmlFor="genero">Gênero:</label>
                <input
                    name="genero"
                    placeholder="Gênero"
                    type="text"
                    onChange={(e) => setGenero(e.target.value)}
                    value={genero}
                />
                <label htmlFor="descricao">Descrição:</label>
                <input
                    name="descricao"
                    placeholder="Descrição"
                    type="text"
                    onChange={(e) => setDescricao(e.target.value)}
                    value={descricao}
                />
                <button onClick={clicarBotao}>
                    {modoEdicao ? "Salvar" : "Cadastrar"}
                </button>
                {cadastroConfirmado && (
                    <p style={{ color: 'green' }}>Livro cadastrado com sucesso!</p>
                )}

                {mostrarModal && livroParaExcluir !== null && (
                    <div className="modal">
                        <p>Tem certeza que deseja excluir o livro "{livroParaExcluir.titulo}"?</p>
                        <button onClick={() => { deletar(livroParaExcluir.id); fecharModal(); }}>Sim</button>
                        <button onClick={fecharModal}>Cancelar</button>
                    </div>
                )}

                {livroDetalhado && exibirDetalhes !== null && (
                    <div>
                        <button onClick={mostrarTabela}>Voltar para a lista de livros</button>
                        <h3>Detalhes do Livro:</h3>
                        <p>Título: {livroDetalhado.titulo}</p>
                        <p>Autor: {livroDetalhado.autor}</p>
                        <p>Ano de Publicação: {livroDetalhado.anoPublicacao}</p>
                        <p>Gênero: {livroDetalhado.genero}</p>
                        <p>Descrição: {livroDetalhado.descricao}</p>
                    </div>
                )}

                <TabelaDeLivros
                    editar={editar}
                    deletar={confirmarDelecao}
                    detalhar={detalhar}
                    mostraDetalhes={exibirDetalhes}
                    livros={livros}
                    modoEdicao={modoEdicao ? true : false}
                />
            </InputStyled>
        </>
    );
}

export default Home;