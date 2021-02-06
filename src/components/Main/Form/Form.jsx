import React , {useContext,useState} from 'react'
import {v4 as uuidv4} from "uuid";
import {TextField , Typography , Grid, Button , FormControl, InputLabel, Select, MenuItem} from "@material-ui/core";
import useStyles from "./Styles";
import {incomeCategories,expenseCategories} from "../../../constants/categories";
import formatDate from "../../../utils/formatDate"
import Snackbar from "../../Snackbar/Snackbar";
import {ExpenseTrackerContext} from "../../../context/context";


const initialState={
    amount:"",
    category:"",
    type:"Income",
    date:formatDate(new Date())
}

export const Form = () => {
    const classes = useStyles();
    const [open,setOpen] = useState({current:false , type:""});
    const [formData , setFormData] = useState(initialState);
    const {addTransaction} = useContext(ExpenseTrackerContext);
    const {segment} = useSpeechContext();
    console.log(segment)

    const createTransaction = ()=>{
       const transaction = {...formData , amount:Number(formData.amount) , id:uuidv4()};
       console.log(transaction)
       addTransaction(transaction);
       setFormData(initialState);
       setOpen({current:true , type:transaction.type});

    }

    const selectedCategories = formData.type==="Income"?incomeCategories:expenseCategories;

    return (
        
        <Grid container spacing={2}>
            <Snackbar open={open} setOpen={setOpen} />
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                 
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e)=>setFormData({...formData , type:e.target.value})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expenses">Expenses</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e)=>setFormData({...formData , category:e.target.value})} >
                        {selectedCategories.map(c=><MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" value={formData.amount} onChange={(e)=>setFormData({...formData , amount:e.target.value})} />
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" value={formData.date}  onChange={(e)=>setFormData({...formData , date:formatDate(e.target.value)})} />
            </Grid>
            <Button className={classes.button} variant="outlined" color="secondary" onClick={createTransaction} fullWidth>Create</Button>
        </Grid>
    )
}
