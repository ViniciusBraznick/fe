import styled from "styled-components";

export const Container = styled.div`
	margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
	width: 100%;

	input {
		width: 100%;
		height: 50px;
		border: none;
		border-radius: 4px;
		background-color: #fff;
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
		outline: 0;
		padding: 0 16px;

		&::placeholder {
			color: #bcbcbc;
		}
	}
`;

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: ${({ justifyContent }) => justifyContent};
	margin-top: 32px;
	border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
	padding-bottom: 16px;

	strong {
		font-size: 24px;
		color: #222;
	}

	a {
		padding: 8px 16px;
		border: 2px solid ${({ theme }) => theme.colors.primary.main};
		border-radius: 4px;
		font-weight: bold;
		text-decoration: none;
		color: ${({ theme }) => theme.colors.primary.main};
		transition: all 0.2s ease-in;

		&:hover {
			background-color: ${({ theme }) => theme.colors.primary.main};
			color: #fff;
		}
	}
`;

export const ListHeader = styled.header`
	margin-top: 24px;
	margin-bottom: 8px;

	button {
		display: flex;
		align-items: center;
		gap: 8px;
		border: none;
		background-color: transparent;

		span {
			font-weight: bold;
			color: ${({ theme }) => theme.colors.primary.main};
		}

		img {
			transition: transform 0.2s linear;
			transform: ${({ orderBy }) =>
				orderBy === "asc" ? "rotate(180deg)" : "rotate(0)"};
		}
	}
`;

export const Card = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16px;
	border-radius: 4px;
	background-color: #fff;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

	& + & {
		margin-top: 16px;
	}

	.info {
		.contact-name {
			display: flex;
			gap: 8px;
			align-items: center;

			small {
				font-weight: bold;
				padding: 4px;
				border-radius: 4px;
				text-transform: uppercase;
				background-color: ${({ theme }) => theme.colors.primary.lighter};
				color: ${({ theme }) => theme.colors.primary.main};
			}
		}

		span {
			display: block;
			font-size: 14px;
			color: ${({ theme }) => theme.colors.gray[200]};
		}
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 8px;

		button {
			background-color: transparent;
			border: none;
		}
	}
`;

export const ErrorContainer = styled.div`
	display: flex;
	margin-top: 16px;
	align-items: center;
	gap: 24px;

	strong {
		font-size: 18px;
		color: ${({ theme }) => theme.colors.danger.main};
		display: block;
		margin-bottom: 8px;
	}
`;

export const EmptyListContainer = styled.div`
	margin-top: 16px;
	margin-bottom: 16px;
	text-align: center;

	p {
		color: ${({ theme }) => theme.colors.gray[200]};

		strong {
			color: ${({ theme }) => theme.colors.primary.light};
		}
	}
`;

export const ContactNotFound = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 24px;
	margin-top: 16px;

	p{
		color: ${({ theme }) => theme.colors.gray[200]};
		word-break: break-word;
	}
`;
