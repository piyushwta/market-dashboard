import { useEffect } from "react";
import { useApp } from "../context/AppContext";

export const useRealtime = () => {
  const { setInstruments } = useApp();

  useEffect(() => {
    const interval = setInterval(() => {
      setInstruments((prev) =>
        prev.map((inst) => {
          const delta = (Math.random() - 0.5) * 2;
          const price = +(inst.price + delta).toFixed(2);

          return {
            ...inst,
            price,
            change: +delta.toFixed(2),
            history: [...inst.history.slice(-4), price],
          };
        }),
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [setInstruments]);
};
