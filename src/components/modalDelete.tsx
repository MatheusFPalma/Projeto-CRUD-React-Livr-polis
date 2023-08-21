import Livro from "../types/Livro";

interface ModalDeleteProps {
    livro: Livro;
    onClose: () => void;
    onDelete: (id: string) => void;
}

function ModalDelete({ livro, onClose, onDelete }: ModalDeleteProps) {
    return (
        <div className="modal">
            <p>Tem certeza que deseja excluir o livro "{livro.titulo}"?</p>
            <button onClick={() => { onDelete(livro.id); onClose(); }}>Sim</button>
            <button onClick={onClose}>Cancelar</button>
        </div>
    );
}

export default ModalDelete;
