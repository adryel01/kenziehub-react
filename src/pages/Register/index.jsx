import { FormRegister } from "../../Components/FormRegister"
import { Header } from "../../Components/Header"
import { ContainerRegister } from "./style"

export function Register (){

	return (
		<ContainerRegister>
			<Header buttonValue='Voltar' buttonFunction={'/'}/>
			<FormRegister/>
		</ContainerRegister>
	)
}