import React from "react";
import {Card , CardHeader , CardContent, Typography } from "@material-ui/core"
import {Doughnut} from "react-chartjs-2";
import useTransactions from "../../useTransactions";



import useStyles from "./Styles";
const Details = ({title})=>{
    const { total, chartData} = useTransactions(title);
    const classes = useStyles();
    return(
        <Card className={title==="Income"?classes.income:classes.expense}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant="h5">{`Rs ${total}`}</Typography>
                <Doughnut data={chartData}></Doughnut>
            </CardContent>
        </Card>
    )
}
export default Details;