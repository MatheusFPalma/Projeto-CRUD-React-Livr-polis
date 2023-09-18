import React from "react";
import styles from "./BarraDePesquisa.module.css";

interface BarraDePesquisaProps {
  filtro: string;
  setFiltro: React.Dispatch<React.SetStateAction<string>>;
}

const BarraDePesquisa: React.FC<BarraDePesquisaProps> = ({ filtro, setFiltro }) => {
  return (
    <div className={styles.barraDePesquisa}>
      <input
        type="text"
        placeholder="Filtrar por título, autor, ano ou gênero"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
    </div>
  );
};

export default BarraDePesquisa;
