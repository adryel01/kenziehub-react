import styled from "styled-components";

export const RegisterContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	margin-top: 40px;
	align-items: center;
	max-width: 500px;
	min-width: 320px;
	width: 100%;
	overflow-y: scroll;

	.FormRegister {
	width: 80%;
	max-width: 100vw;
	margin: 18px;
	display: flex;
	flex-direction: column;
	margin-top: 64px;
	padding: 18px;
	padding-top: 20px;
	gap: 18px;
	background-color: var(--grey-3);
	border-radius: 4px;
}

.TitleRegister {
	font-size: var(--title-1);
	color: var(--grey-0);
}

.SubtitleRegister {
	font-size: var(--headline-size);
	color: var(--grey-1);
}

.ButtonSubmitNegative {
	background-color: var(--color-primary-negative);
	color: var(--grey-0);
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
}
`