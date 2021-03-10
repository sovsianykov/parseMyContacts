import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import ContactsIcon from '@material-ui/icons/Contacts';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function ContactCard({contact}) {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined" >
            <CardContent className='norm'>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                 <ContactsIcon/>
                </Typography>
                <Typography variant="h5" component="h2">
                    {contact["Last Name"]}
                </Typography>
                <Typography variant="h5" component="h2">
                    {contact["First Name"]}
                </Typography>
                <Typography className={classes.pos} color="textSecondary" >
                    <br/>
                    <PhoneAndroidOutlinedIcon/>
                    {contact["Mobile Phone" ]}
                    <br/>
                    {contact["Home Phone" ]}<br/>
                    {contact["Primary Phone" ]}
                </Typography>
                <Typography variant="body2" component="p">
                    {contact["E-mail Address"]}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Call</Button>
            </CardActions>
        </Card>
    );
}