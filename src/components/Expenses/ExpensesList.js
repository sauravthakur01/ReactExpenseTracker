import Expenseitem from "./Expenseitem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return (<h2 className="expense-list__fallback"> Found no expenses</h2>);
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense) => {
        return (
          <div key={expense.id}>
            <Expenseitem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          </div>
        )
      })}
    </ul>
  );
};

export default ExpensesList;
