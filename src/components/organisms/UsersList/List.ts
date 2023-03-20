import styled from 'styled-components'

const List = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr 130px;
	gap: 0.625rem;

	max-width: 700px;

	margin: 0 auto;

	.heading {
		display: flex;
		align-items: center;

		padding: 10px;

		color: var(--white-color);

		background-color: var(--primary-color);
	}
`

export default List
