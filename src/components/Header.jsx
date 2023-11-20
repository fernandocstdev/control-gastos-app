import { Budget } from './Budget'
import { NewBudget } from './NewBudget'

export const Header = ({ onAddBudget, budget, expensed, available, porcentage, handleResetApp }) => {
	return (
		<header>
			<h1>Planificador de gastos</h1>
			{
				budget
					? <Budget
						budget={budget}
						expensed={expensed}
						available={available}
						porcentage={porcentage}
						handleResetApp={handleResetApp}
					/>
					: <NewBudget handleAddBudget={onAddBudget} />
			}
		</header>
	)
}
