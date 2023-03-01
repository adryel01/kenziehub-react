import { FormInput } from "../FormInput"
import { SelectInput } from "../SelectInput"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { toast } from "react-toastify"
import { api } from "../../services/api"
import { ModalRegisterTechBG } from "./style"

export function ModalRegisterTech({changeStateModal, valueDisplay, userTech, setUserTech}) {

	const formSchema = yup.object().shape({
		title: yup.string().required('Tecnologia obrigatório'),
		status: yup.string().required('Status obrigatório')
	})

	const { register, handleSubmit, formState: { errors }, } = useForm({
		resolver: yupResolver(formSchema),
	})

	async function registerTechSubmit (registerTech){
		const token = localStorage.getItem('token')
		try {
			const response = await api.post('/users/techs', registerTech, {headers:{Authorization: `Bearer ${token}`}})
			setUserTech([...userTech, response.data])
			toast.success('Tecnologia cadastrada com sucesso')
		} catch {
			toast.error('Erro ao cadastrar')
		}
	}

	const onSubmitFunction = data => { 
		const {title, status} = data
		const registerTech = {
			title: title, 
			status: status
		}
		registerTechSubmit (registerTech)
	}


	return (
		<ModalRegisterTechBG valueDisplay={valueDisplay}>
			<div className="ModalContainer">
				<div className="ModalHeader">
					<h4>Cadastrar Tecnologia</h4>
					<button onClick={()=> changeStateModal ()}>X</button>
				</div>
				<form onSubmit={handleSubmit(onSubmitFunction)} className='FormRegisterTech'>
					<FormInput
						label="Nome"
						id="title"
						type="text"
						register={register}
						error={errors.title?.message}
						placeholder='Digite aqui a tecnologia'
					/>
					<SelectInput
						label="Selecionar status"
						id="status"
						register={register}
						option={['Iniciante', 'Intermediário', 'Avançado']}
					/>
					<button className="ButtonSubmit" type="submit">Cadastrar Tecnologia</button>
				</form>
			</div>
		</ModalRegisterTechBG>
	)
}