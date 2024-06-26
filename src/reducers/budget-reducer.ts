
export type budgetActions = 
    {type:"add-budget", payload:{budget: number}} |
    {type:"show-modal"}|
    {type:"hide-modal"}

export type budgetState = {
    budget:number
    modal: boolean
}

export const initialState: budgetState = {
    budget:0,
    modal:false
}

export const budgetReducer = (
    state: budgetState = initialState,
    action: budgetActions
    ) => {
        if(action.type === "add-budget"){
            return{
                ...state,
                budget: action.payload.budget
            }
        }
        if(action.type === "show-modal"){
            return{
                ...state,
                modal: true
            }
        }
        if(action.type === "hide-modal"){
            return{
                ...state,
                modal: false
            }
        }
    return state
}
