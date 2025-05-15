import ActionStateForm from "./components/ActionStateForm";
import OptimisticForm from "./components/OptimisticForm";
import StateForm from "./components/StateForm";
import TransitionComponent from "./components/TransitionComponent";
import SuspenseWrapper from "./components/use/SuspenseWrapper";
import { DataProvider } from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
      <h1>Botostart</h1>
      {/* <TransitionComponent /> */}
      {/* <StateForm /> */}
      {/* <ActionStateForm /> */}
      {/* <OptimisticForm /> */}
      <SuspenseWrapper />
    </DataProvider>
  );
}

export default App;
