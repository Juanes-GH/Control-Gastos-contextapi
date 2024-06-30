import { useMemo, useState } from "react";
import { categories } from "../data/categories"
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import type { DraftExpense, Value } from "../types";
import { useBudget } from "../hooks/useBudget";

export const ExpenseForm = () => {

    const [expense, setExpense] = useState<DraftExpense>({
        amount:0,
        expenseName: '',
        category:'',
        date: new Date()
    })

    const isValidExpense = useMemo(() => {
        return (
            expense.amount > 0 &&
            expense.expenseName.trim() !== '' &&
            expense.category.trim() !== ''
        );
    } , [expense])

    const {dispatch} = useBudget()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = e.target
        const isAmounFild = ['amount'].includes(name)
        setExpense({
            ...expense,
            [name]:isAmounFild? +value : value
        })
    }

    const handleChangeData = (value : Value) =>{
        setExpense({
            ...expense,
            date: value
        })
    }

    const handleCLickClearForm = () => {
        setExpense({
            amount:0,
            expenseName: '',
            category:'',
            date: new Date()
        })
    }

    const handleClick = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({type:"add-expense", payload:{expense}})
    }

  return (
    <form className="space-y-5">
        <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py2">
            Nuevo Gasto
        </legend>
        <div className="flex flex-col gap-2">
            <label className="text-xl" htmlFor="expenseName">
                Nombre Gasto:
            </label>
            <input 
                type="text"
                id="expenseName"
                placeholder="Añade el Nombre del gasto"
                className="bg-slate-100 p-2"
                name="expenseName"
                value={expense.expenseName}
                onChange={handleChange}
            />
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-xl" htmlFor="amount">
                Cantidad:
            </label>
            <input 
                type="Number"
                id="amount"
                placeholder="Añade la cantidad del gasto: ej: $100, $20, $3"
                className="bg-slate-100 p-2"
                name="amount"
                value={expense.amount}
                onChange={handleChange}
            />
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-xl" htmlFor="category">
                Cantegory:
            </label>
            <select 
                name="category" 
                id="category" 
                className="bg-slate-100  text-center p-2"
                value={expense.category}
                onChange={handleChange}
            >
                <option value="">-- Seleccione --</option>
                {categories.map(category => (
                    <option 
                        key={category.id}   
                        value={category.name}
                    >
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-xl" htmlFor="amount">
                Fecha gasto:
            </label>
            <DatePicker 
                className="bg-slate-100 p-2 border-0"
                value={expense.date}
                onChange={handleChangeData}
            />
        </div>
        <div className="flex flex-col gap-3 md:flex-row ">
            <input 
                type="button"
                className="bg-red-500 cursor-pointer w-full text-white uppercase hover:bg-red-800 p-2 font-bold rounded-lg"
                value='Limpiar formulario'
                onClick={ handleCLickClearForm }
            />            
            <input 
                type="button"
                className={`w-full text-white uppercase p-2 font-bold rounded-lg ${isValidExpense ? 'bg-blue-600 cursor-pointer hover:bg-blue-800' : 'bg-gray-400 cursor-not-allowed'}`}
                value='Registar Gasto'
                disabled={!isValidExpense}
                onClick={handleClick}
            />
        </div>

    </form>
  )
}
