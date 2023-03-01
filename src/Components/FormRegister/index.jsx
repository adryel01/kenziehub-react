import { useState,useContext } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { FormInput } from "../FormInput"
import { SelectInput } from "../SelectInput"
import { RegisterContainer } from "./style"
import { UserContext } from "../../contexts/UserContext"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export function FormRegister() {
	const navigate = useNavigate()

	const {registerUserSubmit} = useContext(UserContext)

	useEffect(()=>{
		const token = localStorage.getItem('token')
		
		if(token){
			async function autoLogin(){
				try {
					const response = await api.get('/profile', {headers:{Authorization:`Bearer ${token}`}})
					navigate('/dashboard')
					// window.location.replace('/dashboard')
				} catch (error) {
					
				}
			}
			autoLogin()
		}
	},[])

	
	const formSchema = yup.object().shape({
		name: yup.string().required('Nome obrigatório'),
		email: yup.string().required('Email obrigatório').email('Email inválido'),
		password: yup
			.string()
			.matches(/(\d)/, 'Deve conter pelo menos 1 número')
			.matches(/[a-z]/, 'Deve conter pelo menos 1 letra minúscula')
			.matches(/[A-Z]/, 'Deve conter pelo menos 1 letra maiúscula')
			.matches(/\W|_/, 'Deve conter pelo menos 1 caractere especial')
			.matches(/.{8,}/, 'Deve conter pelo menos 8 carateres')
			.required(),
		passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Confirmação de senha deve ser igual a senha'),
	})

	const { register, handleSubmit, formState: { errors }, } = useForm({
		resolver: yupResolver(formSchema),
	})

	const onSubmitFunctionRegister = data => { 
		const {email, name, password, bio, contact, course_module} = data
		const registerUser = {
			name: name, 
			email: email, 
			password: password, 
			bio: bio, 
			contact: contact, 
			course_module: course_module
		}
		registerUserSubmit (registerUser)
	}
	
	return (
		<RegisterContainer>
			<form onSubmit={handleSubmit(onSubmitFunctionRegister)} className='FormRegister'>
				<h1 className="TitleRegister">Crie sua conta</h1>
				<span className="SubtitleRegister">Rápido e grátis, vamos nessa</span>
				<FormInput
					label="Nome *"
					id="name"
					type="text"
					register={register}
					error={errors.name?.message}
					placeholder='Digite aqui seu nome'
				/>
				<FormInput
					label="Email *"
					id="email"
					type="email"
					register={register}
					error={errors.email?.message}
					placeholder='Digite aqui seu email'
				/>
				<FormInput
					label="Senha *"
					id="password"
					type="password"
					register={register}
					error={errors.password?.message}
					placeholder='Digite aqui sua senha'
				/>
				<FormInput
					label="Confirmar senha *"
					id="passwordconfirmation"
					type="password"
					register={register}
					error={errors.passwordConfirmation?.message}
					placeholder='Confirme aqui sua senha'
				/>
				<FormInput
					label="Bio"
					id="bio"
					type="text"
					register={register}
					error={errors.bio?.message}
					placeholder='Fale sobre você'
				/>
				<FormInput
					label="Whatsapp"
					id="contact"
					type="phone"
					register={register}
					error={errors.contact?.message}
					placeholder='Digite aqui seu whatsapp'
				/>
				<SelectInput
					label="Selecionar módulo"
					id="course_module"
					register={register}
					option={['Primeiro módulo', 'Segundo módulo', 'Terceiro módulo', 'Quarto módulo', 'Quinto módulo', 'Sexto módulo']}
				/>
				<button className="ButtonSubmitNegative" type="submit">Cadastrar</button>
			</form>
		</RegisterContainer>

	)
}