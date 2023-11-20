import { useState } from 'react'
import CloseModal from '../img/cerrar.svg'

export const Modal = ({ toggleModal, handleAddExpense, expense }) => {
	const [values, setValues] = useState({
		name: '',
		quantity: '',
		category: ''
	})

	const handleClose = () => {
		toggleModal()
	}

	const handleChange = (event) => {
		const { target } = event
		const { name, value } = target

		const newValues = {
			...values,
			[name]: value
		}

		setValues(newValues)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		handleAddExpense(values)

		setValues({
			name: '',
			quantity: '',
			category: ''
		})

		toggleModal()
	}

	return (
		<div className="modal">
			<div className="cerrar-modal">
				<img
					src={CloseModal}
					alt="Cerrar modal"
					onClick={handleClose}
				/>
			</div>

			<form action="" className='formulario animar' onSubmit={handleSubmit}>
				<legend>Nuevo gasto</legend>
				<div className='campo'>
					<label htmlFor="name">Nombre gastos</label>
					<input
						id='name'
						type="text"
						name='name'
						placeholder='Añade el nombre del gasto '
						value={values.name}
						onChange={handleChange}
					/>
				</div>
				<div className='campo'>
					<label htmlFor="quantity">Cantidad</label>
					<input
						id='quantity'
						type="number"
						name='quantity'
						placeholder='Ingresa la cantidad'
						value={values.quantity}
						onChange={handleChange}
					/>
				</div>
				<div className='campo'>
					<label htmlFor="category">Categoria</label>
					<select
						name="category"
						id="category"
						value={values.category}
						onChange={handleChange}
					>
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
				<input type="submit" value="Añadir gastos" />
			</form>
		</div>
	)
}
