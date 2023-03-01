import styled from "styled-components";


export const ModalEditTechBG = styled.div`
	height: 100vh;
	width: 100%;
	display: ${(props)=>props.valueDisplayEdit};
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 1;
	background-color: #00000090;

	.ModalContainer{
	min-height: 350px;
	width: 80%;
	min-width: 320px;
	max-width: 500px;
	background-color: var(--grey-4);
	/* padding: 18px; */
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 8px;
}

.ModalHeader{
	display: flex;
	flex-direction: row;
	width: 100%;
	min-width: 320px;
	max-width: 500px;
	justify-content: space-between;
	align-items: center;
	background-color: var(--grey-2);
	color: var(--grey - 0);
	border-top-right-radius: 8px;
	border-top-left-radius: 8px;

}	

.ModalHeader > h4{
	padding-left: 16px;
	color: var(--grey-0);
}

.ModalHeader > button{
	background-color: transparent;
	color: var(--grey-1);
	height: 16px;
	width: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.FormEditTech{
	margin-top: 24px;
	display: flex;
	flex-direction: column;
	width: 80%;
	justify-content: space-evenly;
	gap: 16px;
}

.ButtonsContainer{
	display: flex;
	width: 100%;
	justify-content: space-between;
}
`

