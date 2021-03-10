import {FETCH_CONTACTS} from "./Types";
// import src from ' http://localhost:3000/db.json'
export function fetchContacts() {

return async (dispatch) => {
 const response =  await fetch(' http://localhost:3004/src/db.json')
        .then(response => response)

    console.log(response)
    dispatch({type: FETCH_CONTACTS, payload : response})
}

}
fetchContacts()