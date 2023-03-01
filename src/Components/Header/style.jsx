import styled from "styled-components";

export const HeaderStyled = styled.header`
	position: fixed;
	top: 0;
	max-width: 1200px;
	width: 90%;
	display: flex;
	min-width: 320px;
	align-items: center;
	height: 80px;
	background-color: var(--grey-4);

	nav{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 80%;
	padding: 0px 16px;
	width: 100%;
}

.ButtonHeader{
	width: 80px;
	height: 32px;
	color: var(--grey-0);
	background-color: var(--grey-3);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
}
`