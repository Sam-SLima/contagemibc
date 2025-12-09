import CardsItem from "../CardsItem";
import { MdFamilyRestroom } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { useState, useEffect } from "react";
import Input from "../Input";
import Tables from "../tables";

const Card = () => {
  const [listaFamilia, setListaFamilia] = useState<
    { nome: string; membros: string[] }[]
  >(() => {
    const data = localStorage.getItem("familias");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("familias", JSON.stringify(listaFamilia));
  }, [listaFamilia]);

  const adicionarFamilia = (nome: string) => {
    if (nome.trim() !== "") {
      setListaFamilia((prev) => [...prev, { nome, membros: [] }]);
    }
  };

  const adicionarMembro = (index: number, nomeMembro: string) => {
    setListaFamilia((prev) =>
      prev.map((familia, i) =>
        i === index
          ? { ...familia, membros: [...familia.membros, nomeMembro] }
          : familia
      )
    );
  };

  const removerFamilia = (index: number) => {
    setListaFamilia((prev) => prev.filter((_, i) => i !== index));
  };

  const removerMembro = (indexFamilia: number, indexMembro: number) => {
    setListaFamilia((prev) =>
      prev.map((familia, i) =>
        i === indexFamilia
          ? {
              ...familia,
              membros: familia.membros.filter((_, j) => j !== indexMembro),
            }
          : familia
      )
    );
  };

  return (
    <>
      <div className="w-full max-w-4xl mx-auto my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CardsItem
          title="Membros"
          members={listaFamilia.reduce((acc, f) => acc + f.membros.length, 0)}
          Icons={AiOutlineTeam}
          Highlight={true}
        />
        <CardsItem
          title="Familias"
          members={listaFamilia.length}
          Icons={MdFamilyRestroom}
          Highlight={true}
        />
      </div>

      <Input onAddFamilia={adicionarFamilia} />
      {listaFamilia.map((familia, index) => (
        <Tables
          key={index}
          nomeDaFamilia={familia.nome}
          membros={familia.membros}
          onAddMembro={(m) => adicionarMembro(index, m)}
          onDeleteFamilia={() => removerFamilia(index)}
          onDeleteMembro={(i) => removerMembro(index, i)}
        />
      ))}
    </>
  );
};

export default Card;
