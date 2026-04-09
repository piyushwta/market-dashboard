export default function Filters({
    sector,
    setSector,
    status,
    setStatus,
    sort,
    setSort,
}: any) {
    const handleReset = () => {
        setSector("");
        setStatus("");
        setSort("");
    };

    return (
        <div className="flex flex-col md:flex-row gap-4">

            {/* SECTOR */}
            <div className="flex flex-col w-full md:w-auto">
                <label className="text-xs text-gray-500 mb-1">
                    Sector
                </label>
                <select
                    className="border rounded-lg px-3 py-2 text-sm w-full md:w-[160px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                >
                    <option value="">All Sectors</option>
                    <option value="Technology">Technology</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Crypto">Crypto</option>
                </select>
            </div>

            {/* STATUS */}
            <div className="flex flex-col w-full md:w-auto">
                <label className="text-xs text-gray-500 mb-1">
                    Market Status
                </label>
                <select
                    className="border rounded-lg px-3 py-2 text-sm w-full md:w-[160px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                </select>
            </div>

            {/* SORT */}
            <div className="flex flex-col w-full md:w-auto">
                <label className="text-xs text-gray-500 mb-1">
                    Sort By
                </label>
                <select
                    className="border rounded-lg px-3 py-2 text-sm w-full md:w-[160px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="">None</option>
                    <option value="price">Price</option>
                    <option value="change">Change</option>
                    <option value="volume">Volume</option>
                </select>
            </div>

            {/* RESET BUTTON */}
            <div className="flex items-end">
                <button
                    onClick={handleReset}
                    className="text-sm text-gray-500 hover:text-red-500 transition"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}