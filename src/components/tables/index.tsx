import { FaTrash } from "react-icons/fa";
import TableMember from "../TableMember";
import InputMember from "../InputMember";

interface TablesProps {
  nomeDaFamilia: string;
  membros: string[];
  onAddMembro: (nome: string) => void;
  onDeleteFamilia: () => void;
  onDeleteMembro: (index: number) => void;
}
const Tables = ({
  nomeDaFamilia,
  membros,
  onAddMembro,
  onDeleteFamilia,
  onDeleteMembro,
}: TablesProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8 bg-white rounded-2xl shadow-md border border-teal-100 p-4 overflow-x-auto">
      <table className="min-w-full text-sm text-left text-gray-700 border-separate border-spacing-y-2">
        <thead>
          <tr>
            <th className="p-0">
              <div className="flex flex-wrap items-center gap-3 py-4 px-4 bg-teal-100 rounded-xl border border-teal-200 shadow-sm">
                <h1 className="font-semibold text-lg text-teal-900 mr-auto">
                  Familia {nomeDaFamilia}
                </h1>

                <InputMember onAddMembro={onAddMembro} />

                <button
                  onClick={onDeleteFamilia}
                  className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-rose-600 transition-all"
                  title="Excluir família"
                >
                  <FaTrash />
                </button>
              </div>
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {membros.length > 0 ? (
            membros.map((m, index) => (
              <TableMember
                key={index}
                membro={m}
                onDelete={() => onDeleteMembro(index)}
              />
            ))
          ) : (
            <tr>
              <td className="px-4 py-6 text-center text-gray-500">
                Nenhum membro adicionado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
