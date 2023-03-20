import styled from 'styled-components'

export const Navbar = styled.nav`
	a {
		padding: 10px;

		color: inherit;
		line-height: 1;
		text-decoration: none;

		outline: none;

		&.active {
			color: var(--accent-color);
		}
	}

	ul {
		display: flex;
		align-items: center;
	}
`
