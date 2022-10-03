import styled from "styled-components";

export const Container = styled.header`
	margin-bottom: 24px;

	a {
		display: flex;
		gap: 8px;
		text-decoration: none;

		span {
			font-weight: bold;
			color: ${({ theme }) => theme.colors.primary.main};
		}

		img {
			transform: rotate(-90deg);
		}
	}

	h1 {
		font-size: 24px;
		text-transform: capitalize;
	}
`;
