import React from "react";

import { Grid } from '@material-ui/core'
// import Typography  from "@material-ui/core/Typography"
// import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
// import ContactsIcon from '@material-ui/icons/Contacts';
import ContactCard from "./ContactCard";
// import {fetchContacts} from "../redux/actions/contacts";
// import {useDispatch, useSelector } from 'react-redux'
import {gmcontacts} from "../assets/conacts"






const Home = () => {



    return (
        <main>
            <Grid container justify = 'center' spacing = {2} >
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