import { useApp } from "../../context/AppContext";

export default function InstrumentRow({ inst, onSelect }: any) {
  const { watchlist, toggleWatchlist } = useApp();

  const isPositive = inst.change >= 0;
  const isWatched = watchlist.includes(inst.id);

  return (
    <div
      onClick={() => onSelect(inst)}
      className="flex items-center justify-between px-4 py-3 border-b cursor-pointer 
                 hover:bg-gray-50 transition group"
    >
      {/* LEFT SECTION */}
      <div className="flex flex-col">
        <span className="font-medium text-sm text-gray-900">
          {inst.id}
        </span>
        <span className="text-xs text-gray-500 truncate max-w-[140px]">
          {inst.name}
        </span>
      </div>

      {/* PRICE */}
      <div className="text-right">
        <div className="text-sm font-semibold text-gray-800">
          ${inst.price.toLocaleString()}
        </div>
      </div>

      {/* CHANGE */}
      <div className="text-right min-w-[70px]">
        <div
          className={`text-sm font-medium ${isPositive ? "text-green-500" : "text-red-500"
            }`}
        >
          {isPositive ? "+" : ""}
          {inst.change}%
        </div>
      </div>

      {/* WATCHLIST BUTTON */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleWatchlist(inst.id);
        }}
        className={`ml-3 text-lg transition ${isWatched
            ? "text-yellow-400"
            : "text-gray-300 group-hover:text-gray-500"
          }`}
      >
        {isWatched ? "★" : "☆"}
      </button>
    </div>
  );
}