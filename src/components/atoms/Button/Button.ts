import styled from 'styled-components'

const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 5px 10px;
	border: none;

	color: var(--white-color);
	font-weight: 700;
	font-family: Montserrat;
	text-transform: uppercase;

	background-color: var(--primary-color);

	transition: .3s ease;

	&:hover {
		color: var(--black-color);
		background-color: var(--accent-color);
	}

	&:disabled {
		background-color: red;
	}
`

export default Button
