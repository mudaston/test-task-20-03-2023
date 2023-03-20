import styled from 'styled-components'

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 15px;

	.input-bottom-block {
		display: flex;
		justify-content: space-between;
	}

	.input-block {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.save {
		align-self: flex-end;
	}
`

export default Form
