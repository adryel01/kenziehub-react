import { FormLogin } from "../../Components/FormLogin"
import kenziehub from "/src/assets/kenziehub.svg"
import { ContainerLogin } from "./style"
import { useEffect } from "react"
import { api } from "../../services/api"

export function Login (){


	return (
		<ContainerLogin>
			<img src={kenziehub} alt="Logo Kenzie Hub"/>
			<FormLogin/>
		</ContainerLogin>
	)
}