import React from "react";

import { Grid } from '@material-ui/core'
import Typography  from "@material-ui/core/Typography"
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import ContactsIcon from '@material-ui/icons/Contacts';
import ContactCard from "./ContactCard";
import {fetchContacts} from "../redux/actions/contacts";
import {useDispatch, useSelector } from 'react-redux'
import {gmcontacts} from "../assets/conacts"


const contacts  = [{ id:1 , FirstName : "Sergey", LastName : "Petrov" , phone :"+380508054899"},
{ id:2 , FirstName : "Pavel", LastName : "Petrov" , phone :"+38050805497"},
{ id:3 , FirstName : "Alla", LastName : "Petrova" , phone :"+380508774899"}
]

 const m = "First Name";
const Home = () => {
    const gmc= gmcontacts
    const dispatch = useDispatch()

    const renameJsonArray =(gmcontacts) =>{
        const FirstName = "First Name"
        let myContacts = []
       gmc.map((el,i) => {


           myContacts[i] =  el["First Name"]
           console.log(myContacts)

           return myContacts

       })
    }
   renameJsonArray(gmcontacts)
    return (
        <main>
            <button onClick={dispatch(fetchContacts)}>Click me</button>
            <Grid container justify = 'center' spacing = {3} >
                {gmcontacts.map((contact,index) =>(
                    <Grid item  key={index} xs={12}  sm =  {6}  md ={4} lg = {3} >
                        <ContactCard  contact = {contact}
                                        />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
export default Home