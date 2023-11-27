import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

const ExpenseTracker = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [expenses, setExpenses] = useState([
        { id: 1, description: "Banana", amount: 10, category: "Fruits" },
        { id: 4, description: "Oil", amount: 20, category: "Groceries" },
        { id: 2, description: "Potato", amount: 6, category: "Vegetables" },
        { id: 3, description: "Sugar", amount: 15, category: "Groceries" },
    ]);

    const visibleExpenses = selectedCategory
        ? expenses.filter((expense) => expense.category === selectedCategory)
        : expenses;

    const onDelete = (id: number) => {
        setExpenses(expenses.filter((expense) => expense.id !== id));
    };
    return (
        <div>
            <div className="mb-5">
                <ExpenseForm
                    onSubmit={(expense) =>
                        setExpenses([
                            ...expenses,
                            { ...expense, id: expenses.length + 1 },
                        ])
                    }
                />
            </div>
            <div className="mb-3">
                <ExpenseFilter
                    onSelectCategory={(category) =>
                        setSelectedCategory(category)
                    }
                />
            </div>
            <ExpenseList expenses={visibleExpenses} onDelete={onDelete} />
        </div>
    );
};

export default ExpenseTracker;
