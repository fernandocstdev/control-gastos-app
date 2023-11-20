import { useState } from 'react'

export const Filters = ({ handleFilterChange }) => {
	const [value, setValue] = useState('')

	const onChangeFilter = (e) => {
		setValue(e.target.value)
		handleFilterChange(e.target.value)
	}
	return (
		<div className="filtros sombra contenedor">
			<form action="">
				<div className="campo">
					<label htmlFor="">Filtrar gastos</label>
					<select name="" id="" value={value} onChange={onChangeFilter}>
						<option value="">--- Seleccione una ---</option>
						<option value="ahorro">Ahorro</option>
						<option value="comida">Comida</option>
						<option value="casa">Casa</option>
						<option value="gastos">Gastos varios</option>
						<option value="ocio">Ocio</option>
						<option value="salud">Salud</option>
						<option value="suscripciones">Suscripciones</option>
					</select>
				</div>
			</form>
		</div>
	)
}
