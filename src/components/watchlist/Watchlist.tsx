import { useApp } from "../../context/AppContext";

export default function Watchlist({ onSelect }: any) {
    const { instruments, watchlist } = useApp();

    const data = instruments.filter((i) => watchlist.includes(i.id));

    return (
        <div className="p-3 border-b bg-white">
            {/* HEADER */}
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold text-gray-700">
                    ⭐ Watchlist
                </h3>
                <span className="text-xs text-gray-400">
                    {data.length} items
                </span>
            </div>

            {/* EMPTY STATE */}
            {!data.length && (
                <div className="text-sm text-gray-400 text-center py-4 border rounded-lg">
                    No instruments added
                </div>
            )}

            {/* LIST */}
            <div className="space-y-2">
                {data.map((i) => (
                    <div
                        key={i.id}
                        onClick={() => onSelect(i)}
                        className="flex justify-between items-center p-3 rounded-lg border cursor-pointer hover:shadow-sm hover:bg-gray-50 transition"
                    >
                        {/* LEFT */}
                        <div>
                            <p className="font-medium text-sm">{i.id}</p>
                            <p className="text-xs text-gray-500">{i.name}</p>
                        </div>

                        {/* RIGHT */}
                        <div className="text-right">
                            <p className="text-sm font-semibold">
                                ${i.price.toLocaleString()}
                            </p>
                            <p
                                className={`text-xs ${i.change >= 0 ? "text-green-500" : "text-red-500"
                                    }`}
                            >
                                {i.change}%
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}