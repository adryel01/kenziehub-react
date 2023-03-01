import kenziehub from "/src/assets/kenziehub.svg"
import { Link } from "react-router-dom"
import { HeaderStyled } from "./style"

export function Header ({buttonValue, buttonFunction}){

	function reset(){
		localStorage.clear()
	}

	return (
		<HeaderStyled>
			<nav>
				<img src={kenziehub} alt="Logo Kenzie Hub"/>
				<Link to={buttonFunction} onClick={()=>reset()} className='ButtonHeader'>{buttonValue}</Link>
			</nav>
		</HeaderStyled>
	)
}