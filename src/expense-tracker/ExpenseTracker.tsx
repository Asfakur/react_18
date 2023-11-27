import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([
        { id: 1, description: "Banana", amount: 10, category: "Fruits" },
        { id: 4, description: "Oil", amount: 20, category: "Groceries" },
        { id: 2, description: "Potato", amount: 6, category: "Vegetables" },
        { id: 3, description: "Sugar", amount: 15, category: "Groceries" },
    ]);

    const onDelete = (id: number) => {
        setExpenses(expenses.filter((expense) => expense.id !== id));
    };
    return (
        <div>
            <ExpenseList expenses={expenses} onDelete={onDelete} />
        </div>
    );
};

export default ExpenseTracker;
