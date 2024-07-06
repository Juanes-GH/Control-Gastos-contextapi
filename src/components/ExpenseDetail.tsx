import { TrashIcon } from "@heroicons/react/16/solid"
import { Expense } from "../types"
import { PencilSquareIcon } from "@heroicons/react/16/solid"

type ExpenseDetailProps = {
    expense: Expense
}

export default function ExpenseDetail({expense}:ExpenseDetailProps) {

  const {amount, expenseName, category, date} = expense;

  const formattedDate = date 
  ? Array.isArray(date) 
    ? new Date(date[0]!).toLocaleDateString() 
    : new Date(date).toLocaleDateString()
  : '';

  function getExpenseCategory(category:string) {
    return category === "Gastos Varios" ? "gastos" : category;
  }


  return (
    <div className="flex items-center p-8">
      <div className="w-1/4">
        <img src={`./public/icono_${getExpenseCategory(category)}.svg`} alt="categoryIcon" className="w-16 h-16"/>
      </div>

      <div className="w-3/4 flex flex-col">
        <div className="flex justify-between items-start">
          <div className="flex-grow">
            <p className="text-2xl text-blue-400 font-bold">
              Gasto:{' '}
              <span className="text-black font-normal">{expenseName}</span>
            </p>
            <p className="text-2xl text-blue-400 font-bold">
              Cantidad gastada:{' '}
              <span className="text-black font-normal">{amount}</span>
            </p>
            <p className="text-2xl text-blue-400 font-bold">
              Dia del gasto:{' '}
              <span className="text-black font-normal">{formattedDate}</span>
            </p>
          </div>
          <div className="flex flex-col space-y-7">
            <button className="w-8 h-8 hover:cursor-pointer hover:text-red-600">
              <TrashIcon />
            </button>
            <button className="w-8 h-8 hover:cursor-pointer hover:text-orange-400" >
              <PencilSquareIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
