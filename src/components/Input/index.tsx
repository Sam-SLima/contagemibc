import { useState } from "react";

interface InputProps {
  onAddFamilia: (nomeFamilia: string) => void;
}

const Input = ({ onAddFamilia }: InputProps) => {
  const [familia, setFamilia] = useState<string>("");

  const handleFamilia = () => {
    if (familia.trim() !== "") {
      onAddFamilia(familia);
      setFamilia("");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-teal-50 rounded-xl shadow-sm flex flex-wrap justify-between items-end gap-4 p-4 sm:p-6">
      <div className="flex flex-col flex-1 min-w-[200px]">
        <label
          htmlFor="Membro"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Familia
        </label>
        <input
          value={familia}
          type="text"
          placeholder="digite a familia"
          onChange={(e) => setFamilia(e.target.value)}
          className="border border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 rounded-lg py-2 px-3 text-sm text-gray-800 outline-none transition-all"
        />
        <button
          onClick={handleFamilia}
          className="bg-teal-600 mt-3 hover:bg-teal-700 active:bg-teal-800 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-sm min-w-[120px]"
          type="submit"
        >
          Adicionar Familia
        </button>
      </div>
    </div>
  );
};

export default Input;
