import { useState } from "react";
import Filters from "../instruments/Filters";

export default function Header({
    search,
    setSearch,
    sector,
    setSector,
    status,
    setStatus,
    sort,
    setSort,
}: any) {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className="border-b bg-white p-3 md:p-4 sticky top-0 z-10">

            {/* SEARCH */}
            <div className="flex gap-2">
                <input
                    className="border rounded-lg px-3 py-2 flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search instruments..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* FILTER BUTTON (MOBILE) */}
                <button
                    onClick={() => setShowFilters(true)}
                    className="md:hidden px-3 py-2 border rounded-lg text-sm"
                >
                    ⚙️
                </button>
            </div>

            {/* 🖥️ DESKTOP FILTERS */}
            <div className="hidden md:block mt-3">
                <Filters
                    sector={sector}
                    setSector={setSector}
                    status={status}
                    setStatus={setStatus}
                    sort={sort}
                    setSort={setSort}
                />
            </div>

            {/* 📱 MOBILE FILTER DRAWER */}
            {showFilters && (
                <div className="fixed inset-0 bg-black/30 z-50 flex justify-end">

                    <div className="w-3/4 max-w-sm bg-white h-full p-4 shadow-lg">

                        {/* HEADER */}
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-medium">Filters</h3>
                            <button onClick={() => setShowFilters(false)}>✕</button>
                        </div>

                        {/* FILTERS */}
                        <Filters
                            sector={sector}
                            setSector={setSector}
                            status={status}
                            setStatus={setStatus}
                            sort={sort}
                            setSort={setSort}
                        />

                        {/* APPLY BUTTON */}
                        <button
                            onClick={() => setShowFilters(false)}
                            className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg"
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}