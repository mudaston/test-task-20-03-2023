import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { Formik, type FormikHelpers } from 'formik'

import { useAuth } from '../../../../hooks'
import { statuses, sleep } from '../../../../helpers'
import { LoginValidation, type LoginData } from './ValidationSchema'

import { Input, ErrorMessage } from '../../../atoms'
import Form from './Form'

interface EditUser {}

type Props = EditUser

const Component: FC<Props> = () => {
	const navigator = useNavigate()
	const [disableEdit, setDisableEdit] = React.useState(true)
	const [success, setSuccess] = React.useState(false)

	const { authorize } = useAuth()

	const initialValues = {
		login: '',
		password: '',
	}

	const handleSubmit = async (
		values: LoginData,
		{ setStatus, setSubmitting }: FormikHelpers<LoginData>
	) => {
		const { login, password } = values

		await sleep(1000)

		if (!(login === 'admin' && password === 'qwerty!')) {
			setStatus(statuses.ERROR_AUTH)

			return
		}

		authorize()
		navigator('/users')
	}

	const allowEditOnFocus = () => {
		setDisableEdit(false)
	}

	const disallowEditOnBlur = () => {
		setDisableEdit(true)
	}

	React.useEffect(() => {
		if (!success) return

		setTimeout(() => {
			navigator('/users')
		}, 2000)
	}, [success])

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={toFormikValidationSchema(LoginValidation)}
			onSubmit={handleSubmit}
		>
			{({
				values: { login, password },
				errors,
				isSubmitting,
				status,
				handleChange,
				handleSubmit,
			}) => (
				<Form
					onSubmit={(e) => {
						e.preventDefault()
						handleSubmit()
					}}
				>
					{status === statuses.ERROR_AUTH && (
						<ErrorMessage>User not found </ErrorMessage>
					)}
					<div className="input-block">
						<Input
							type="text"
							name="login"
							onChange={handleChange}
							onFocus={allowEditOnFocus}
							onBlur={disallowEditOnBlur}
							value={login}
							placeholder="Login"
							readOnly={disableEdit}
						/>
						{errors.login && <ErrorMessage>{errors.login}</ErrorMessage>}
					</div>
					<div className="input-block">
						<Input
							type="password"
							name="password"
							onChange={handleChange}
							onFocus={allowEditOnFocus}
							onBlur={disallowEditOnBlur}
							value={password}
							placeholder="Password"
							readOnly={disableEdit}
						/>
						{errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
					</div>
					<div className="input-bottom-block">
						<Input
							className="login"
							type="submit"
							value="Login"
							disabled={isSubmitting}
						/>
					</div>
				</Form>
			)}
		</Formik>
	)
}

export default Component
