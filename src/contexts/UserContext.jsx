import { createContext, useEffect, useState } from "react";
// import { useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from 'yup'
// import { FormInput } from "../FormInput"

// import axios from "axios"
import { toast } from "react-toastify"

// import { Link } from "react-router-dom"
// import { Register } from "../../pages/Register"
// import { LoginContainer } from "./style"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api";

export const UserContext = createContext({})

export function UserProvider ({children}){

	const navigate = useNavigate()

	async function loginUserSubmit(loginUser) {
		try {
			const response = await api.post('/sessions', loginUser)
			
			localStorage.setItem('token', response.data.token)
			setUseToken(response.data.token)
			toast.success('Login realizado com sucesso')
			navigate('/dashboard')
			// window.location.replace('/dashboard')
		} catch {
			toast.error('Erro ao fazer o login, usuário ou senha incorretos')
		}
	}
	

	async function registerUserSubmit (registerUser){
		try {
			const response = await api.post('/users', registerUser)
			toast.success('Cadastro realizado com sucesso')
			navigate('/')
			// window.location.replace('/')
		} catch {
			toast.error('Erro ao cadastrar')
		}
	}

	return (
		<UserContext.Provider value={{loginUserSubmit, registerUserSubmit}}>
			{children}
		</UserContext.Provider>
	)
}