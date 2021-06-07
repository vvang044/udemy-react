import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props){
    // const expenseDate = new Date(2021, 4, 30);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;

    // const month = props.date.toLocaleString('en-US', { month: 'long' });
    // const year = props.date.getFullYear();

    return (
        <Card className="expense-item">
            <div>
                {/* <div>Month</div> */}
                <ExpenseDate date={props.date}></ExpenseDate>
               
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
    
}


export default ExpenseItem;