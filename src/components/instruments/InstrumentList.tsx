import { useInstruments } from "../../hooks/useInstruments";
import { useDebounce } from "../../hooks/useDebounce";
import InstrumentRow from "./InstrumentRow";

export default function InstrumentList({
  onSelect,
  search,
  sector,
  status,
  sort,
}: any) {
  // debounce search input
  const debouncedSearch = useDebounce(search, 300);

  const data = useInstruments(
    debouncedSearch,
    sector,
    status,
    sort
  );

  const isSearching = search !== debouncedSearch;

  return (
    <div className="flex flex-col h-full">

      {/* Searching Indicator */}
      {isSearching && (
        <div className="text-xs text-gray-400 px-4 py-1">
          Searching...
        </div>
      )}

      {/* ❌ Empty State */}
      {!data.length && !isSearching && (
        <div className="flex flex-col items-center justify-center py-10 text-gray-400">
          <div className="text-sm">No results found</div>
          <div className="text-xs">
            Try changing filters or search keyword
          </div>
        </div>
      )}

      {/* ✅ LIST */}
      <div className="flex-1 overflow-y-auto">
        {data.map((inst) => (
          <InstrumentRow
            key={inst.id}
            inst={inst}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}