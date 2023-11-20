import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export const Budget = ({ budget, expensed, available, porcentage, handleResetApp }) => {
	const formatedQuantity = (amount) => {
		const formattedAmount = amount.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		})

		return formattedAmount
	}

	const budgetFormated = formatedQuantity(budget)
	const availableFormated = formatedQuantity(available)
	const expensedFormated = formatedQuantity(expensed)

	const handleClickResetApp = () => {
		handleResetApp()
	}

	return (
		<div className="contenedor-presupuesto sombra contenedor dos-columnas">
			<div>
				<CircularProgressbar value={porcentage} text={`${porcentage}% gastado`} />
			</div>
			<div className="contenido-presupuesto">
				<button className='reset-app' onClick={handleClickResetApp}>Resetear App</button>
				<p>Presupuesto: <span>{budgetFormated}</span></p>
				<p>Disponible: <span>{availableFormated}</span></p>
				<p>Gastado: <span>{expensedFormated}</span></p>
			</div>
		</div>
	)
}
