import { categories } from "../data/categories"

export const ExpenseForm = () => {
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
            />
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-xl" htmlFor="category">
                Cantegory:
            </label>
            <select 
                name="category" 
                id="category" 
                className="bg-slate-100  text-center p-2">
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
        <input 
            type="button"
            className="bg-blue-600 cursor-pointer w-full text-white uppercase hover:bg-blue-800 p-2 font-bold rounded-lg"
            value='Registar Gasto'
        />
    </form>
  )
}
