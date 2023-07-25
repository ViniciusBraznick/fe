import styled, { css } from "styled-components";

const containerVariants = {
	default: css`
		background-color: ${({theme}) => theme.colors.primary.main};
	`,
	success: css`
		background-color: ${({theme}) => theme.colors.success.main};
	`,
	danger: css`
		background-color: ${({theme}) => theme.colors.danger.main};
	`,
};

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	padding: 16px 32px;
	border-radius: 4px;
	color: #FFF;
	cursor: pointer;
	box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);

	${({type}) => containerVariants[type] || containerVariants.default}

	& + & {
		margin-top: 12px;
	}
`
