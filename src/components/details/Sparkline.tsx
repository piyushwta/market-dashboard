export default function Sparkline({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);

  return (
    <div className="flex h-16 gap-1">
      {data.map((v, i) => {
        const h = ((v - min) / (max - min)) * 100;
        return <div key={i} className="bg-blue-500 w-2" style={{ height: `${h}%` }} />;
      })}
    </div>
  );
}