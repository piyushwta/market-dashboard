import { useMemo } from "react";
import { useApp } from "../context/AppContext";

export const useInstruments = (
  search: string,
  sector: string,
  status: string,
  sort: string,
) => {
  const { instruments } = useApp();

  return useMemo(() => {
    let data = [...instruments];

    if (search) {
      data = data.filter((i) =>
        [i.name, i.id, i.sector, ...i.tags]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase()),
      );
    }

    if (sector) data = data.filter((i) => i.sector === sector);
    if (status) data = data.filter((i) => i.marketStatus === status);

    if (sort === "price") data.sort((a, b) => b.price - a.price);
    if (sort === "change") data.sort((a, b) => b.change - a.change);
    if (sort === "volume")
      data.sort((a, b) => b.metrics.volume - a.metrics.volume);

    return data;
  }, [instruments, search, sector, status, sort]);
};
