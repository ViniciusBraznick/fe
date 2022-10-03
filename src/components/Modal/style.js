import styled from "styled-components";

export const Overlay = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(4px);
`;

export const Container = styled.div`
	max-width: 450px;
	width: 95%;
	margin: auto;
	border-radius: 4px;
	padding: 24px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
	background-color: #fff;

	h1 {
		font-size: 24px;
		color: ${({ theme, danger }) => (
			danger ? theme.colors.danger.main : theme.colors.gray[900]
		)};
	}

	p {
		margin-top: 8px;
	}
`;

export const Footer = styled.footer`
	margin-top: 32px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 8px;

	.cancel-button {
		background-color: transparent;
		border: none;
		color: ${({ theme }) => theme.colors.gray[200]};
		transition: color 0.2s ease-in;

		&:hover {
			color: ${({ theme }) => theme.colors.gray[900]};
		}
	}
`;
