import {FETCH_CONTACTS} from "../actions/Types";

const initialState = {
   my_contacts  : [{ id:1 , FirstName : "Sergey", LastName : "Petrov" , phone :"+380508054899"},
        { id:2 , FirstName : "Pavel", LastName : "Petrov" , phone :"+38050805497"},
        { id:3 , FirstName : "Alla", LastName : "Petrova" , phone :"+380508774899"}
    ]
}

export const contacts = (state = initialState , action) => {

    if  (action.type === FETCH_CONTACTS) {
        return {
            ...state, my_contacts: action.payload
        }
    }

    return state
}

