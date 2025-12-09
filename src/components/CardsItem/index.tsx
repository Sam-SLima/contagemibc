interface props {
  title: string;
  members: number;
  Icons: React.ElementType;
  Highlight: boolean;
  color?: "teal" | "rose" | "amber";
}

const CardsItem = ({
  title,
  members,
  Icons,
  Highlight = false,
  color = "amber",
}: props) => {
  const bgColor = Highlight
    ? "bg-gradient-to-r from-teal-500 to-amber-500 text-white"
    : "bg-white text-gray-800";

  const iconColor =
    color === "teal"
      ? "text-teal-600"
      : color === "rose"
      ? "text-rose-600"
      : "text-amber-500";

  return (
    <div
      className={`flex flex-col justify-between rounded-xl shadow-sm border border-gray-200 ${bgColor} p-5 transition-transform hover:scale-[1.02]`}
    >
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-sm font-semibold uppercase tracking-wide">
          {title}
        </h1>
        <Icons className={`text-xl ${Highlight ? "text-white" : iconColor}`} />
      </header>
      <p
        className={`text-2xl sm:text-3xl font-bold ${
          Highlight ? "text-white" : "text-gray-800"
        }`}
      >
        {members}
      </p>
    </div>
  );
};

export default CardsItem;
