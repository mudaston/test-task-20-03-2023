import styled from 'styled-components'

const Input = styled.input`
	padding: 0.625rem 1.25rem;
	border: var(--grey-color) 1px solid;

	color: var(--primary-color);
	font-weight: 700;

	transition: 0.3s ease;

	&::placeholder {
		color: var(--grey-color);
	}

	&[type='button'],
	&[type='submit'] {
		border: transparent 3px solid;

		color: var(--white-color);
		background-color: var(--primary-color);

		&:disabled {
			border: var(--primary-color) 3px solid;

			color: var(--black-color);

			background-color: transparent;
			cursor: not-allowed;
		}
	}
`

export default Input
