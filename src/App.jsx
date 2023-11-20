import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { BudgetList } from './components/ExpensesList'
import NewBudgetIcon from './img/nuevo-gasto.svg'
import { Filters } from './components/Filters'

const EXP = [
	{
		id: 'aaaaa',
		name: 'comidita',
		date: new Date(),
		quantity: 100,
		category: 'comida'
	},
	{
		id: 'aaa3232323aa',
		name: 'DIDI',
		date: new Date(),
		quantity: 90,
		category: 'gastos'
	},
	{
		id: 'aaa2323aa',
		name: 'apple music',
		date: new Date(),
		quantity: 150,
		category: 'suscripciones'
	},
	{
		id: 'wwaa2323aa',
		name: 'Spotify',
		date: new Date(),
		quantity: 150,
		category: 'suscripciones'
	},
	{
		id: 'aassssa2323aa',
		name: 'netflix',
		date: new Date(),
		quantity: 150,
		category: 'suscripciones'
	}
]

function App() {
	const [budget, setBudget] = useState(2000)
	const [expensed, setExpensed] = useState(0)
	const [available, setAvalible] = useState(0)
	const [modal, setModal] = useState(false)
	const [expenses, setExpenses] = useState(EXP)
	const [porcentage, setPorcentage] = useState([0])
	const [filterSelected, setFilterSelected] = useState('')

	const handleAddBudget = (value) => {
		setBudget(value)
		setAvalible(value)
	}

	const toggleModal = () => {
		setModal(prev => !prev)
	}

	const handleAddExpense = ({ name, quantity, category }) => {
		const amount = Number(quantity)

		const newExpense = {
			id: crypto.randomUUID(),
			name,
			date: new Date(),
			quantity: amount,
			category
		}
		const newExpenses = [...expenses, newExpense]

		setExpenses(newExpenses)
	}

	useEffect(() => {
		const totalExpensed = expenses.reduce((total, exp) => exp.quantity + total, 0)
		const totalAvalible = budget - totalExpensed

		const newPorcentage = (((budget - totalAvalible) / budget) * 100).toFixed(2)

		setExpensed(totalExpensed)
		setAvalible(totalAvalible)
		setPorcentage(newPorcentage)
	}, [expenses])

	const handleRemoveExpense = ({ id }) => {
		const newExpenses = expenses.filter(exp => exp.id !== id)
		setExpenses(newExpenses)
	}

	// todo: edit expense
	const handleEditExpense = ({ id }) => {
		const findExpense = expenses.find(exp => exp.id === id)
		console.log(findExpense)
		toggleModal()
	}

	const handleFilterChange = (filter) => {
		setFilterSelected(filter)
	}

	let filteredExpenses
	if (filterSelected !== '') {
		filteredExpenses = expenses.filter(exp => exp.category === filterSelected)
	} else {
		filteredExpenses = expenses
	}

	const handleResetApp = () => {
		setBudget(0)
		setExpenses([])
	}

	return (
		<div className={modal ? 'fijar' : ''}>
			<Header
				onAddBudget={handleAddBudget}
				budget={budget}
				expenses={expenses}
				expensed={expensed}
				available={available}
				porcentage={porcentage}
				handleResetApp={handleResetApp}
			/>
			<div style={{
				marginTop: '70px'
			}}>
				<Filters filterSelected={filterSelected} handleFilterChange={handleFilterChange} />
			</div>

			{
				budget
					? (
						<>
							<BudgetList
								expenses={filteredExpenses}
								handleRemoveExpense={handleRemoveExpense}
								handleEditExpense={handleEditExpense}
							/>
							<div style={{
								marginTop: '100px'
							}} className='nuevo-gasto'>
								<img
									src={NewBudgetIcon}
									alt="Icono agregar presupuesto"
									onClick={toggleModal}
								/>
							</div>
						</>
					)
					: null
			}
			{modal && <Modal
				toggleModal={toggleModal}
				handleAddExpense={handleAddExpense}
			/>}

		</div>
	)
}

export default App
