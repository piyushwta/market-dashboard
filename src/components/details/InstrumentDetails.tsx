import Sparkline from "./Sparkline";
import RawExplorer from "./RawExplorer";
import type { Instrument } from "../../types/instrument.types";

export default function InstrumentDetails({
    instrument,
}: {
    instrument: Instrument;
}) {
    return (
        <div className="space-y-6">

            {/* HEADER */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold">{instrument.name}</h2>
                    <p className="text-gray-500">{instrument.id} • {instrument.sector}</p>
                </div>

                <div className="text-right">
                    <p className="text-2xl font-bold">${instrument.price}</p>
                    <p
                        className={`text-sm ${instrument.change >= 0 ? "text-green-500" : "text-red-500"
                            }`}
                    >
                        {instrument.change}%
                    </p>
                </div>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2">
                {instrument.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-100 rounded-md"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* SPARKLINE CARD */}
            <div className="bg-white shadow-sm rounded-xl p-4 border">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                    Price Trend
                </h3>
                <Sparkline data={instrument.history} />
            </div>

            {/* METRICS GRID */}
            <div className="grid grid-cols-3 gap-4">
                <Metric label="P/E Ratio" value={instrument.metrics.peRatio ?? "N/A"} />
                <Metric label="Market Cap" value={instrument.metrics.marketCap} />
                <Metric label="Volume" value={formatNumber(instrument.metrics.volume)} />
            </div>

            {/* MARKET STATUS */}
            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border">
                <span className="text-gray-600">Market Status</span>
                <span
                    className={`px-2 py-1 rounded text-sm ${instrument.marketStatus === "Open"
                            ? "bg-green-100 text-green-600"
                            : "bg-gray-200 text-gray-600"
                        }`}
                >
                    {instrument.marketStatus}
                </span>
            </div>

            {/* RAW EXPLORER (COLLAPSIBLE) */}
            <details className="bg-gray-50 p-3 rounded-lg border">
                <summary className="cursor-pointer font-medium">
                    Raw Metrics Explorer
                </summary>

                <div className="mt-2 text-sm">
                    <RawExplorer data={instrument} />
                </div>
            </details>
        </div>
    );
}

/* 🔹 Reusable Metric Component */
function Metric({ label, value }: { label: string; value: any }) {
    return (
        <div className="bg-white border rounded-xl p-3 shadow-sm">
            <p className="text-xs text-gray-500">{label}</p>
            <p className="text-lg font-semibold">{value}</p>
        </div>
    );
}

/* 🔹 Format numbers nicely */
function formatNumber(num: number) {
    return num.toLocaleString();
}