import error404 from "/src/assets/error404.png"
import { Error404 } from "./style"

export function PageError404 (){
	return(
		<Error404>
			<img src={error404} alt="error404" />
		</Error404>
	)
}