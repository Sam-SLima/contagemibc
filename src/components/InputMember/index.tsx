import { useState } from "react";
import { FaPlus } from "react-icons/fa";

interface InputProps {
  onAddMembro: (nomeMembro: string) => void;
}
const InputMember = ({ onAddMembro }: InputProps) => {
  const [membro, setMembro] = useState<string>("");

  const handleMembro = () => {
    if (membro.trim() !== "") {
      onAddMembro(membro);
      setMembro("");
    }
  };
  return (
    <div>
      <input
        value={membro}
        onChange={(e) => setMembro(e.target.value)}
        type="text"
        placeholder="Informe o membro"
        className="border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-300 py-2 px-3 rounded-lg text-sm text-gray-800 outline-none transition-all"
      />
      <button
        onClick={handleMembro}
        className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-teal-600 transition-all"
        title="Excluir família"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default InputMember;
