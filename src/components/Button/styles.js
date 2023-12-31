import styled, { css } from "styled-components";

export const StyledButton = styled.button`
	height: 52px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 16px;
	border: none;
	border-radius: 4px;
	font-size: 16px;
	font-weight: bold;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
	color: #fff;
	background-color: ${({ theme }) => theme.colors.primary.main};
	transition: background-color 0.1s linear;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary.light};
	}

	&:active {
		background-color: ${({ theme }) => theme.colors.primary.dark};
	}

	&[disabled] {
		background-color: ${({ theme }) => theme.colors.gray[200]};
		cursor: default;
	}

	${({ theme, danger }) =>
		danger &&
		css`
			background-color: ${theme.colors.danger.main};

			&:hover {
				background-color: ${theme.colors.danger.light};
			}

			&:active {
				background-color: ${theme.colors.danger.dark};
			}
		`}
`;
