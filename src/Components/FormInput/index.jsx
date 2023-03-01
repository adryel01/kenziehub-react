import { DivForm } from "./style"

export function FormInput({ label, id, type, register, error, placeholder, value}) {
	
	return (
		<DivForm>
			<label htmlFor={id}>{label}</label>
			<input id={id} type={type} {...register(id)} placeholder={placeholder} value={value}/>
			{error ? <p className="ErrorInput">{error}</p> : null}
		</DivForm>
	)

}