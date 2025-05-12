import ActionStateForm from "./components/ActionStateForm";
import OptimisticForm from "./components/OptimisticForm";
import StateForm from "./components/StateForm";

function App() {
  return (
    <div>
      <StateForm />
      <ActionStateForm />
      <OptimisticForm />
    </div>
  );
}

export default App;
