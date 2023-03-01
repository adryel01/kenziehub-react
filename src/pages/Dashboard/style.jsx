import styled from "styled-components";

export const DashboardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: baseline;
	padding-top: 18px;
	width: 100%;
	max-width: 1200px;

	.UserInfo{
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		width: 95%;
		
		border-top: 1px var(--grey-1) solid;
		border-bottom: 1px var(--grey-1) solid;
		/* position: fixed;
		top: 80px; */
		margin-top: 70px;
		justify-content: center;
		padding-left: 20px;
		height: 131px;
	}

	.UserName{
		color: var(--grey-0);
		font-size: var(--title-1);
	}

	.UserCourse{
		color: var(--grey-2);
	}
	
`