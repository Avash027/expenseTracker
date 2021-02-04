import React,{useContext} from "react";
import {Card , CardHeader, CardContent, Typography,Grid,Divider} from "@material-ui/core";
import {Form} from "./Form/Form";
import List from "./List/List";
import useStyles from "./Styles";
import {ExpenseTrackerContext} from "./../../context/context";
const Main = ()=>{
    const classes = useStyles();
    return(
        <div>
            <Card className={classes.root}>
                <CardHeader title="Expense Tracker" subheader="By Avash Mitra" />
                <CardContent>
                    <Typography align="center" variant="h5">{`Total Balance is: ${TotalBalance()}`}</Typography>
                    <Typography variant="subtitle1" style={{lineHeight:"1.5em" , marginTop:"20px"}}>
                        Try saying:..
                    </Typography>
                    <Divider/>
                    <Form />
                </CardContent>
                <CardContent className={classes.cardContent}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <List/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

const TotalBalance = ()=>{
    const {transactions} = useContext(ExpenseTrackerContext);
    const total = transactions.reduce((acc,curval)=>
acc+=curval.type==="Income"?curval.amount:-curval.amount,
0
    )
    return total;
}

export default Main;