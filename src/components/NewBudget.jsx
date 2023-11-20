import { useState } from 'react'

export const NewBudget = ({ handleAddBudget }) => {
	const [value, setValue] = useState('')

	const handleChange = (event) => {
		const budgetValue = event.target.value
		setValue(Number(budgetValue))
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!Number(value) || Number(value) < 0) return console.error('Invalid budget')

		handleAddBudget(value)
	}

	return (
		<div className="contenedor-presupuesto contenedor sombra">
			<form action="" className="formulario" onSubmit={handleSubmit}>
				<div className="campo">
					<label htmlFor="">Definir presupuesto</label>
					<input
						className="nuevo-presupuesto"
						type="number"
						placeholder="añade tu presupuesto"
						value={value}
						onChange={handleChange}
					/>
					<input type="submit" value="Añadir" />
				</div>
			</form>
		</div>
	)
}
