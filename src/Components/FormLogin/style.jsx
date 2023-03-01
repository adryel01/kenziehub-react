import styled from "styled-components";

export const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	padding: 18px;
	max-width: 600px;
	min-width: 500px;
	align-items: center;
	width: 100%;

	.FormLogin {
	max-width: 350px;
	margin: 18px;
	display: flex;
	flex-direction: column;
	min-height: 402px;
	min-width: 250px;
	padding: 18px;
	gap: 18px;
	background-color: var(--grey-3);
	border-radius: 4px;
}

.TitleLogin {
	font-size: var(--title-1);
	color: var(--grey-0);
}

.FormLogin>span{
	color: var(--grey-0);
}

.ButtonRegister {
	height: 40px;
	background-color: var(--grey-1);
	color: var(--grey-0);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
}

	
`