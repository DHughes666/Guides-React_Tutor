import ExpenseItem from "./ExpenseItem"
import "./Expenses.css";

function Expenses(props) {
    return (
        <div className="expenses">
            <ExpenseItem 
                date = {props.stuffs[0].date}
                title = {props.stuffs[0].title}
                amount = {props.stuffs[0].amount}
            />
            <ExpenseItem 
                date = {props.stuffs[1].date}
                title = {props.stuffs[1].title}
                amount = {props.stuffs[1].amount}
            />
            <ExpenseItem 
                date = {props.stuffs[2].date}
                title = {props.stuffs[2].title}
                amount = {props.stuffs[2].amount}
            />
            <ExpenseItem 
                date = {props.stuffs[3].date}
                title = {props.stuffs[3].title}
                amount = {props.stuffs[3].amount}
            />
        </div> 
        
    )
}

export default Expenses;