import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { budgetReducer, budgetState, initialState,budgetActions } from "../reducers/budget-reducer"

type BudgerContextProps = {
    state: budgetState
    dispatch: Dispatch<budgetActions>
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgerContextProps>(null!)

export const BudgetProvider = ({children}:BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)
    
    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}
