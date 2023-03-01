import { FormInput } from "../FormInput"
import { SelectInput } from "../SelectInput"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { toast } from "react-toastify"
import { api } from "../../services/api"
import { ModalEditTechBG } from "./style"

export function ModalEditTech({ changeStateModalEdit, valueDisplayEdit, techNameValue, techIdValue, userTech, setUserTech }) {


	const formSchema = yup.object().shape({
		status: yup.string().required('Status obrigatório')
	})

	const { register, handleSubmit, formState: { errors }, } = useForm({
		resolver: yupResolver(formSchema),
	})

	async function editTechSubmit(editTech) {
		const token = localStorage.getItem('token')
		try {
			const response = await api.put(`/users/techs/${techIdValue}`, editTech, {headers:{Authorization:`Bearer ${token}`}})
			toast.success('Tecnologia cadastrada com sucesso')
			const returnFilter = userTech.filter(element => element.id != techIdValue)
			setUserTech([...returnFilter, response.data])
		} catch {
			toast.error('Erro ao cadastrar')
		}
	}


	const onSubmitFunction = data => {
		const { status } = data
		const editTech = {
			status: status
		}
		editTechSubmit(editTech)
	}

	async function deleteTech(techIdValue) {
		const token = localStorage.getItem('token')
		try {
			const response = await api.delete(`/users/techs/${techIdValue}`,{headers:{Authorization:`Bearer ${token}`}})
			toast.success('Tecnologia excluída com sucesso')
			changeStateModalEdit()
			const returnFilter = userTech.filter(element => element.id !== techIdValue)
			setUserTech([...returnFilter])
		} catch {
			toast.error('Erro ao excluir')
		}
	}



	return (
		<ModalEditTechBG valueDisplayEdit={valueDisplayEdit}>
			<div className="ModalContainer">
				<div className="ModalHeader">
					<h4>Editar Tecnologia</h4>
					<button onClick={() => changeStateModalEdit()}>X</button>
				</div>
				<form onSubmit={handleSubmit(onSubmitFunction)} className='FormEditTech'>
					<FormInput
						label="Nome"
						id="title"
						type="text"
						register={register}
						error={errors.title?.message}
						placeholder='Digite aqui a tecnologia'
						value={techNameValue}
					/>
					<SelectInput
						label="Selecionar status"
						id="status"
						register={register}
						option={['Iniciante', 'Intermediário', 'Avançado']}
					/>
					<div className="ButtonsContainer">
						<button className="ButtonSubmit" type="submit">Salvar edição</button>
						<button className="ButtonDelete" type="button" onClick={()=>deleteTech(techIdValue)}>Excluir</button>
					</div>
				</form>
			</div>
		</ModalEditTechBG>
	)
}