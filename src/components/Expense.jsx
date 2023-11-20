import Ahorro from '../img/icono_ahorro.svg'
import Casa from '../img/icono_casa.svg'
import Comida from '../img/icono_comida.svg'
import Gastos from '../img/icono_gastos.svg'
import Ocio from '../img/icono_ocio.svg'
import Salud from '../img/icono_salud.svg'
import Suscripciones from '../img/icono_suscripciones.svg'

const IMAGES = {
	ahorro: Ahorro,
	casa: Casa,
	comida: Comida,
	gastos: Gastos,
	ocio: Ocio,
	salud: Salud,
	suscripciones: Suscripciones
}

export const Expense = ({ id, name, quantity, category, date, handleRemoveExpense, handleEditExpense }) => {
	const options = {
		year: 'numeric',
		month: 'long',
		day: '2-digit'
	}
	const formatDate = date.toLocaleDateString('es-ES', options)

	const handleClickRemove = () => {
		handleRemoveExpense({ id })
	}

	const handleClickEdit = () => {
		handleEditExpense({ id })
	}

	return (
		<div className="gasto sombra">
			<div className="contenido-gasto">
				<img src={IMAGES[category]} alt="Icono gasto" />
				<div className="descripcion-gasto">
					<p className="categoria">{category}</p>
					<p className="nombre-gasto">{name}</p>
					<p className="fecha-gasto">Agregado el: <span>{formatDate}</span></p>
					<div style={{
						marginTop: '20px',
						display: 'flex',
						gap: '5px'
					}}>
						<button style={{
							backgroundColor: 'red',
							borderRadius: '8px',
							border: 'none',
							padding: '5px 10px',
							color: 'white'
						}} onClick={handleClickRemove}>
							Eliminar
						</button>
						<button style={{
							backgroundColor: 'blue',
							borderRadius: '8px',
							border: 'none',
							padding: '5px 10px',
							color: 'white'
						}} onClick={handleClickEdit}>
							Editar
						</button>
					</div>
				</div>
			</div>
			<p className="cantidad-gasto">${quantity}</p>
		</div>
	)
}
