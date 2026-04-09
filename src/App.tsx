import { AppProvider } from "./context/AppContext";
import Dashboard from "./components/layout/Dashboard";


export default function App() {
  return (
    <AppProvider>
      <Dashboard />
    </AppProvider>
  );
}