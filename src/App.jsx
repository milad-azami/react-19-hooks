import ActionStateForm from "./components/ActionStateForm";
import OptimisticForm from "./components/OptimisticForm";
import StateForm from "./components/StateForm";
import TransitionComponent from "./components/TransitionComponent";
import SuspenseWrapper from "./components/use/SuspenseWrapper";
import { DataProvider } from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
      <title>Botostart | Milad Azami</title>
      <meta name="author" content="milad Azami" />
      <meta name="keywords" content="milad Azami, Botostart, Blog" />
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
