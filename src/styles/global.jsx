import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

	:root{
		--color-primary: #FF577F;
		--color-primary-focus: #FF427F;
		--color-primary-negative: #59323F;
		--grey-4: #121214;
		--grey-3: #212529;
		--grey-2: #343B41;
		--grey-1: #868E96;
		--grey-0: #F8F9FA;

		--negative: #E83F5B;
		--warning: #FFCD07;
		--sucess: #3FE864;
		--information: #155BCB;

		--title-1: 20px;
		--title-2: 18px;
		--title-3: 16px;
		--title-4: 14px;

		--title-weight: bold;

		--headline-size: 12px;

		--headline-weight: 400;

	}

	body{
		margin: 0 auto;
		padding: 0;
		background: var(--grey-4);
		display: flex;
		justify-content: baseline;
		align-items: center;
		flex-direction: column;
		width: 100%;
	}

	.ButtonSubmit{
		height: 40px;
		background-color: var(--color-primary);
		color: var(--grey-0);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
	}

	.ButtonDelete{
		height: 40px;
		background-color: var(--grey-1);
		color: var(--grey-0);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
	}

	.ButtonDelete:hover{
		background-color: var(--grey-2);
		color: var(--grey-0);
	}

	.ButtonSubmit:disabled{
		height: 40px;
		background-color: var(--grey-1);
		color: var(--grey-0);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
	}

	.ButtonSubmit:disabled:hover{
		height: 40px;
		background-color: var(--grey-2);
		color: var(--grey-0);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
	}

	.ButtonSubmit:hover{
		background-color: var(--color-primary-focus);
		color: var(--grey-0);
		border: none;
		outline: 0px transparent solid;
	}
`