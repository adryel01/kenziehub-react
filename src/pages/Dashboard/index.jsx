import { useState, useEffect, useContext } from "react"
import { Header } from "../../Components/Header"
import { toast } from "react-toastify"
import { api } from "../../services/api"
import { DashboardContainer } from "./style"
import { TechList } from "../../Components/TechList"
import { ModalRegisterTech } from "../../Components/ModalRegisterTech"
import { ModalEditTech } from "../../Components/ModalEditTech"
import { UserContext } from "../../contexts/UserContext"
import { useNavigate } from "react-router-dom"


export function Dashboard() {
	const [userName, setUserName] = useState('')
	const [userCourse, setUserCourse] = useState('')
	const [userTech, setUserTech] = useState([])
	const [showModalRegisterTech, setShowModalRegisterTech] = useState(false)
	const [showModalEditTech, setShowModalEditTech] = useState(false)
	const [techNameValue, setTechNameValue] = useState('')
	const [techIdValue, setTechIdValue] = useState('')
	
	const navigate = useNavigate()

	

	useEffect(() => {
		
		async function getUserProfile() {
			const token = localStorage.getItem('token')
			if(token){
				try {
					const responseLogin = await api.get('/profile', {headers:{Authorization:`Bearer ${token}`}})
					localStorage.setItem('userId', responseLogin.data.id)
					getUserName(responseLogin)
					getUserCourse(responseLogin)
					getUserTech(responseLogin)
				} catch {
					toast.error('Tempo de requisição excedido')
				}
			} else {
				navigate('/')
			}
		}
		
		getUserProfile()
	}, [])
	
	function changeStateModal() {
		setShowModalRegisterTech(!showModalRegisterTech)
		valueDisplay()
	}

	function changeStateModalEdit() {
		setShowModalEditTech(!showModalEditTech)
		valueDisplayEdit()
	}

	function valueDisplayEdit() {
		const value = showModalEditTech ? ('flex') : ('none')
		return value
	}

	function valueDisplay() {
		const value = showModalRegisterTech ? ('flex') : ('none')
		return value
	}

	function getUserName(response) {
		setUserName('')
		setUserName(response.data.name)
	}

	function getUserCourse(response) {
		setUserCourse('')
		setUserCourse(response.data.course_module)
	}

	function getUserTech(response) {
		setUserTech([])
		setUserTech([...response.data.techs])
	}

	function getTarget(event) {
		const valueTarget = event.currentTarget.id
		const techName = userTech.find(element => element.id == valueTarget).title
		changeStateModalEdit()
		setTechNameValue(techName)
		setTechIdValue(valueTarget)
	}

	return (
		<DashboardContainer>
			<Header buttonValue='Sair' buttonFunction={'/'}/>
			<div className="UserInfo">
				<h1 className="UserName">Olá, {userName}</h1>
				<span className="UserCourse">{userCourse}</span>
			</div>
			<TechList userTech={userTech} changeStateModal={changeStateModal} getTarget={getTarget} />
			<ModalRegisterTech changeStateModal={changeStateModal} valueDisplay={valueDisplay} userTech={userTech} setUserTech={setUserTech} />
			<ModalEditTech changeStateModalEdit={changeStateModalEdit} valueDisplayEdit={valueDisplayEdit} techNameValue={techNameValue} techIdValue={techIdValue} userTech={userTech} setUserTech={setUserTech} />
		</DashboardContainer>
	)
}