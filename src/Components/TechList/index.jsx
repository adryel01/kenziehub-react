import { TechContainer } from "./style"

export function TechList({ userTech, changeStateModal, getTarget }) {


	return (
		<TechContainer>
			<div className="HeaderListTechs">
				<h2>Tecnologias</h2>
				<button onClick={() => changeStateModal()} >+</button>
			</div>
			<ul className="ListTechs">
				{
					userTech.length > 0 ? (
						userTech.map(tech => (
							<li key={tech.id} id={tech.id} className="ListItem" onClick={(event) => getTarget(event)}>
								<h2>{tech.title}</h2>
								<h4>{tech.status}</h4>
							</li>
						))
					) : (

						<li className="ListItemEmpity">
							<h2>Você ainda não cadastrou nenhum tecnologia</h2>
						</li>

					)
				}
			</ul>
		</TechContainer>

	)
}