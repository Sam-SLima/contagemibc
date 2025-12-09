import { FaTrash } from "react-icons/fa";

interface TableMembers {
  membro: string;
  onDelete: () => void;
}

const TableMember = ({ membro, onDelete }: TableMembers) => {
  return (
    <tr className="bg-white hover:bg-teal-50 transition-colors rounded-lg">
      <td className="flex items-center justify-between px-4 py-3 text-gray-700 border border-gray-200 rounded-lg">
        {membro}
        <button
          onClick={onDelete}
          className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-rose-600 transition-all"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default TableMember;
