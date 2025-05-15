import { createContext } from "react";

const data = "THIS IS A MOCK DATA";

const DataContext = createContext();

function DataProvider({ children }) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export { DataProvider, DataContext };
// Commit message: "Add DataContext and DataProvider for global state management"
