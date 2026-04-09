import { useState } from "react";

type Props = {
  data: any;
  level?: number;
};

export default function RawExplorer({ data, level = 0 }: Props) {
  const isObject = typeof data === "object" && data !== null;
  const [open, setOpen] = useState(level < 1); // auto-open first level

  if (!isObject) {
    return (
      <span className="text-blue-600 font-mono">
        {formatValue(data)}
      </span>
    );
  }

  const entries = Array.isArray(data)
    ? data.map((v, i) => [i, v])
    : Object.entries(data);

  return (
    <div className="font-mono text-sm">
      <div
        className="flex items-center gap-1 cursor-pointer select-none"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-gray-500">
          {open ? "▼" : "▶"}
        </span>
        <span className="text-purple-600">
          {Array.isArray(data) ? "Array" : "Object"}
        </span>
        <span className="text-gray-400">
          ({entries.length})
        </span>
      </div>

      {open && (
        <div className="ml-4 border-l border-gray-200 pl-3 space-y-1 mt-1">
          {entries.map(([key, value]) => (
            <div key={String(key)} className="flex gap-2">
              <span className="text-gray-700 min-w-[80px]">
                {key}:
              </span>
              <RawExplorer data={value} level={level + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* 🔹 Format primitive values nicely */
function formatValue(value: any) {
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "number") return value;
  if (typeof value === "boolean") return value ? "true" : "false";
  if (value === null) return "null";
  return String(value);
}