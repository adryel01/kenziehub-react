import { DivForm } from "../FormInput/style"

export function SelectInput({ label, id, register, option}) {
	return (
		<DivForm>
			<label htmlFor={id}>{label}</label>
			<select id={id} {...register(id)}>
				{
					option.map(element => (
						<option value={element} key={element}>{element}</option>
					))
				}
			</select>
		</DivForm>
	)

}