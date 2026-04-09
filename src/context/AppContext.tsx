import { createContext, useContext, useState } from "react";
import { initialInstruments } from "../data/instruments";
import type { Instrument } from "../types/instrument.types";

interface AppContextType {
    instruments: Instrument[];
    setInstruments: React.Dispatch<React.SetStateAction<Instrument[]>>;
    watchlist: string[];
    toggleWatchlist: (id: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [instruments, setInstruments] = useState(initialInstruments);
    const [watchlist, setWatchlist] = useState<string[]>([]);

    const toggleWatchlist = (id: string) => {
        setWatchlist(prev =>
            prev.includes(id)
                ? prev.filter(i => i !== id)
                : [...prev, id]
        );
    };

    return (
        <AppContext.Provider value={{ instruments, setInstruments, watchlist, toggleWatchlist }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext)!;