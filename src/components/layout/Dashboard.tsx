import { useState } from "react";
import { useRealtime } from "../../hooks/useRealtime";
import Header from "./Header";
import InstrumentList from "../instruments/InstrumentList";
import InstrumentDetails from "../details/InstrumentDetails";
import Watchlist from "../watchlist/Watchlist";
import type { Instrument } from "../../types/instrument.types";

export default function Dashboard() {
    useRealtime();

    const [selected, setSelected] = useState<Instrument | null>(null);

    const [search, setSearch] = useState("");
    const [sector, setSector] = useState("");
    const [status, setStatus] = useState("");
    const [sort, setSort] = useState("");

    // 🔥 Mobile tab state
    const [tab, setTab] = useState<"list" | "watchlist">("list");

    return (
        <div className="h-screen flex flex-col bg-gray-50">
            
            {/* HEADER */}
            <Header
                search={search}
                setSearch={setSearch}
                sector={sector}
                setSector={setSector}
                status={status}
                setStatus={setStatus}
                sort={sort}
                setSort={setSort}
            />

            {/* 🔥 MOBILE TABS */}
            <div className="md:hidden flex border-b bg-white">
                <button
                    onClick={() => setTab("list")}
                    className={`flex-1 py-2 text-sm ${tab === "list"
                            ? "border-b-2 border-blue-500 font-medium"
                            : "text-gray-500"
                        }`}
                >
                    Instruments
                </button>

                <button
                    onClick={() => setTab("watchlist")}
                    className={`flex-1 py-2 text-sm ${tab === "watchlist"
                            ? "border-b-2 border-blue-500 font-medium"
                            : "text-gray-500"
                        }`}
                >
                    Watchlist
                </button>
            </div>

            {/* MAIN */}
            <div className="flex flex-1 overflow-hidden">

                {/* 🔥 LEFT PANEL */}
                <div className="w-full md:w-1/2 border-r overflow-y-auto bg-white">

                    {/* MOBILE VIEW */}
                    <div className="md:hidden">
                        {tab === "watchlist" ? (
                            <Watchlist onSelect={setSelected} />
                        ) : (
                            <InstrumentList
                                onSelect={setSelected}
                                search={search}
                                sector={sector}
                                status={status}
                                sort={sort}
                            />
                        )}
                    </div>

                    {/* DESKTOP VIEW */}
                    <div className="hidden md:block">
                        <Watchlist onSelect={setSelected} />
                        <InstrumentList
                            onSelect={setSelected}
                            search={search}
                            sector={sector}
                            status={status}
                            sort={sort}
                        />
                    </div>
                </div>

                {/* 🔥 RIGHT PANEL (DETAILS) */}
                <div
                    className={`
            fixed inset-0 bg-white z-50 transition-transform duration-300
            md:static md:w-1/2 md:block
            ${selected ? "translate-x-0" : "translate-x-full md:translate-x-0"}
          `}
                >
                    {/* MOBILE HEADER */}
                    <div className="md:hidden flex items-center p-3 border-b">
                        <button
                            onClick={() => setSelected(null)}
                            className="mr-3 text-blue-500"
                        >
                            ← Back
                        </button>
                        <span className="font-medium text-sm">
                            {selected?.id}
                        </span>
                    </div>

                    <div className="p-4 overflow-y-auto h-full">
                        {selected ? (
                            <InstrumentDetails instrument={selected} />
                        ) : (
                            <div className="hidden md:block text-gray-500">
                                Select Instrument
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}