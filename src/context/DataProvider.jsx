import { createContext } from "react";

const data = "THIS IS A MOCK DATA";

const DataContext = createContext();

function DataProvider({ children }) {
  return <DataContext value={data}>{children}</DataContext>;
}

export { DataProvider, DataContext };

