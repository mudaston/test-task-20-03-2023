import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { Formik } from 'formik'

import { UserValidation } from './ValidationSchema'

import { BoldText, Input, ErrorMessage } from '../../../atoms'
import Form from './Form'

import type { UserInfo } from './ValidationSchema'

interface EditUser {
	user: UserInfo
}

type Props = EditUser

const Component: FC<Props> = ({ user }) => {
	const navigator = useNavigate()

	const [success, setSuccess] = React.useState(false)

	const initialValues = {
		name: user.name,
		phone: user.phone,
		email: user.email,
		company: user.company,
	}

	const handleSubmit = (values: UserInfo) => {
		console.log({ values })

		setTimeout(() => {
			setSuccess(true)
		}, 1000)
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
			validationSchema={toFormikValidationSchema(UserValidation)}
			onSubmit={handleSubmit}
		>
			{({
				values: { name, phone, email, company },
				errors,
				isSubmitting,
				handleChange,
				handleBlur,
				handleSubmit,
				handleReset,
			}) => (
				<Form
					onSubmit={(e) => {
						e.preventDefault()
						handleSubmit()
					}}
				>
					<h1>
						Editing information about the user&nbsp;
						<BoldText>{String(user.name)}</BoldText>
					</h1>
					<div className="input-block">
						<Input
							type="text"
							name="name"
							onChange={handleChange}
							onBlur={handleBlur}
							value={name}
							placeholder="Name"
						/>
						{errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
					</div>
					<div className="input-block">
						<Input
							type="phone"
							name="phone"
							onChange={handleChange}
							onBlur={handleBlur}
							value={phone}
							placeholder="Phone"
						/>
						{errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
					</div>
					<div className="input-block">
						<Input
							type="email"
							name="email"
							onChange={handleChange}
							onBlur={handleBlur}
							value={email}
							placeholder="Email"
						/>
						{errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
					</div>
					<div className="input-block">
						<Input
							type="text"
							name="company"
							onChange={handleChange}
							onBlur={handleBlur}
							value={company}
							placeholder="Company"
						/>
						{errors.company && <ErrorMessage>{errors.company}</ErrorMessage>}
					</div>
					<div className="input-bottom-block">
						<Input
							className="clear"
							type="button"
							value="Reset"
							onClick={handleReset}
						/>
						<Input
							className="save"
							type="submit"
							value="Save"
							disabled={isSubmitting}
						/>
					</div>
				</Form>
			)}
		</Formik>
	)
}

export default Component
