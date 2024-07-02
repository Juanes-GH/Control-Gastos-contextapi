import { TrashIcon } from "@heroicons/react/16/solid"
import { Expense } from "../types"
import { PencilSquareIcon } from "@heroicons/react/16/solid"

type ExpenseDetailProps = {
    expense: Expense
}

export default function ExpenseDetail({expense}:ExpenseDetailProps) {

  const {amount, expenseName, category, date} = expense
  console.log(date, 'fecha')

  return (
    <div className="flex items-center p-8">
      <div className="w-1/4">
        <img src={`./public/icono_${category}.svg`} alt="categoryIcon" className="w-16 h-16"/>
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
              <span className="text-black font-normal">{"08/20/2024"}</span>
            </p>
          </div>
          <div className="flex flex-col space-y-7">
            <button className="w-8 h-8 hover:cursor-pointer">
              <TrashIcon />
            </button>
            <button className="w-8 h-8 hover:cursor-pointer" >
              <PencilSquareIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
