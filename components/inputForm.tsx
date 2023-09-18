import React, { useState } from "react";
import { v4 as uuid } from "uuid";


interface LivroFormData {
    titulo: string;
    autor: string;
    anoPublicacao: string;
    genero: string;
    descricao: string;
}

interface LivroFormComId extends LivroFormData {
    id: string;
}

interface InputFormProps {
    onSubmit: (data: LivroFormComId) => void;
}

function InputForm({ onSubmit }: InputFormProps) {
    const [titulo, setTitulo] = useState<string>("");
    const [autor, setAutor] = useState<string>("");
    const [anoPublicacao, setAnoPublicacao] = useState<string>("");
    const [genero, setGenero] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    
    function clicarBotao(e: React.FormEvent<HTMLFormElement>) {
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

        const novoLivro: LivroFormComId = {
            id: uuid(),
            titulo,
            autor,
            anoPublicacao,
            genero,
            descricao,
        };

        onSubmit(novoLivro);
    }

    return (
        <form onSubmit={clicarBotao}>
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
            <button type="submit">Cadastrar</button>
        </form>
    );
}

export default InputForm;

