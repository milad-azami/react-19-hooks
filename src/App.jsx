import { Suspense } from "react";
import ActionStateForm from "./components/ActionStateForm";
import OptimisticForm from "./components/OptimisticForm";
import StateForm from "./components/StateForm";
import SuspenseComponent from "./components/use/SuspenseWrapper";
import TransitionComponent from "./components/TransitionComponent";
import SuspenseWrapper from "./components/use/SuspenseWrapper";

function App() {
  return (
    <>
      <h1>Botostart</h1>
      {/* <TransitionComponent /> */}
      {/* <StateForm /> */}
      {/* <ActionStateForm /> */}
      {/* <OptimisticForm /> */}
      <SuspenseWrapper />
    </>
  );
}

export default App;
