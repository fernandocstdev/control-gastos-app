import { Expense } from './Expense'

export const BudgetList = ({ expenses, handleRemoveExpense, handleEditExpense, handleFilterChange }) => {
	const isExpenses = expenses.length > 0
	return (
		<div>
			<div className="listado-gastos contenedor">
				{
					isExpenses
						? (expenses.map(exp => (
							<Expense
								key={exp.id}
								id={exp.id}
								date={exp.date}
								name={exp.name}
								quantity={exp.quantity}
								category={exp.category}
								handleRemoveExpense={handleRemoveExpense}
								handleEditExpense={handleEditExpense}
							/>
						)))
						: <h2>No hay</h2>

				}
			</div>
		</div>
	)
}
