import styled from 'styled-components'

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 15px;

	width: 300px;

	.input-bottom-block {
		display: flex;
	}

	.input-block {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.login {
		flex: 1;
	}
`

export default Form
