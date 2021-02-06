import React,{useContext} from "react";
import {Card , CardHeader, CardContent, Typography,Divider} from "@material-ui/core";
import {Form} from "./Form/Form";
import useStyles from "./Styles";
import {ExpenseTrackerContext} from "./../../context/context";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Main = ()=>{
    const classes = useStyles();
    return(
        <div>
            <Card className={classes.root}>
                <CardHeader title="Expense Tracker" subheader="By Avash Mitra" />
                <CardContent>
                    <Typography align="center" variant="h5">{`Total Balance is: ${TotalBalance()}`}</Typography>
                    <Divider/>
                    <Form />
                </CardContent>
                <CardContent className={classes.icons}>
                    <Typography variant="subtitle1" >
                        Contact
                    </Typography>
                <a href="https://github.com/Avash027/expenseTracker" target="__blank" rel="noreferrer"><GitHubIcon  /></a> 
                <a href="https://www.linkedin.com/in/avash-mitra-4548761a6/" target="__blank" rel="noreferrer" ><LinkedInIcon /></a>  
                </CardContent>
            </Card>
        </div>
    )
}

const TotalBalance = ()=>{
    const {transactions} = useContext(ExpenseTrackerContext);
    const total = transactions.reduce((acc,curval)=>
acc+=curval.type==="Income"?curval.amount:-curval.amount,
0)
    return total;
}

export default Main;