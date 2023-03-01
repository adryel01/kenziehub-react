import styled from "styled-components";

export const DivForm = styled.div`
	display: flex;
	flex-direction: column;
	height: 72px;
	justify-content: space-between;

	label{
	align-self: flex-start;
	font-size: var(--headline-size);
	padding-bottom: 5px;
	color: var(--grey-0);
}

input{
	min-height: 40px;
	border-radius: 4px;
	background-color: var(--grey-2);
	color: var(--grey-0);
	outline: 0px transparent solid;
	border: none;
	padding-left: 16px;
}	

.ErrorInput{
	font-size: 10px;
	color: var(--color-primary);
	align-self: flex-end;
}

select{
	height: 40px;
	border-radius: 4px;
	background-color: var(--grey-2);
	color: var(--grey-0);
	outline: 0px transparent solid;
	border: none;
	padding-left: 16px;
}	

input::placeholder{
	color: var(--grey-1);
}
`