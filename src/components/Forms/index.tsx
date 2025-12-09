import { useState } from "react";
import Card from "../Card";
import Input from "../Input";
import InputMember from "../InputMember";
import Tables from "../tables";

const Dashboard = () => {
  const [familias, setFamilias] = useState<string[]>([]);
  const [membros, setMembros] = useState<string[]>([]);

  const adicionarFamilia = (nome: string) => {
    setFamilias((prev) => [...prev, nome]);
  };

  const adicionarMembro = (nome: string) => {
    setMembros((prev) => [...prev, nome]);
  };

  return (
    <>
      <Card membro={membros.length} familias={familias.length} />

      <Input onAddFamilia={adicionarFamilia} />

      <InputMember onAddMembro={adicionarMembro} />

      <Tables membros={membros} />
    </>
  );
};

export default Dashboard;
