import styled from "styled-components";

export const TechContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 95%;
	max-width: 1200px;
	padding: 18px;
	align-items: center;
	/* position: relative;
	top: 200px; */
	/* margin-top: 200px; */

	.HeaderListTechs{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	max-width: 100vw;
	color: var(--grey-0);
	align-items: center;
}

.HeaderListTechs>button{
	height: 36px;
	width: 32px;
	background-color: var(--grey-3);
	color: var(--grey-0);
	display: flex;
	justify-content: center;
	align-items: center;
}

.ListTechs{
	display: flex;
	flex-direction: column;
	width: 95%;
	max-width: 100vw;
	margin: 16px auto;
	padding: 20px 8px;
	background-color: var(--grey-3);
	min-height: 80px;
	border-radius: 4px;
	justify-content: center;
	align-items: center;
	gap: 16px;
}

.ListItem{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0px 16px;
	color: var(--grey-0);
	background-color: var(--grey-4);
	width: 90%;
	max-width: 100vw;
	border-radius: 4px;
	cursor: pointer;
}

.ListItem>h2{
	font-size: var(--title-2);
	color: var(--grey-0);
}

.ListItem>h4{
	font-size: var(--title-4);
	color: var(--grey-1);
}

.ListItem:hover{
	color: var(--grey-0);
	background-color: var(--grey-2);
}

.ListItemEmpity{
	color: var(--grey-0);
	list-style: none;
	width: 90%;
	max-width: 100vw;
	border-radius: 4px;
}
`
