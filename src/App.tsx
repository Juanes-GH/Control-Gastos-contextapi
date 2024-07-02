import { useMemo } from "react";
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import BudgerTracker from "./components/BudgerTracker";
import ExpenseModal from "./components/ExpenseModal";
import ExpenseList from "./components/ExpenseList";

function App() {

  const {state} = useBudget();

  const isValidBuget = useMemo(() => state.budget > 0, [state.budget])

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="text-center text-white text-4xl font-black uppercase">
          Planificador de Gastos
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValidBuget ? <BudgerTracker/> : <BudgetForm/>}
      </div>

      {isValidBuget &&(
        <main className="max-w-3xl mx-auto py-10 bg-white shadow-lg rounded-lg mt-10">
          <ExpenseList/>
          <ExpenseModal />
        </main>
      )}

   </>
  )
}

export default App
