import React, { FC } from 'react'

import { Helmet } from 'react-helmet'

import { useSearchParams, useParams } from 'react-router-dom'

import { UserSchema, type User } from '../../services/user'
import useFetch from '../../hooks/useFetch'
import apiEndpoints from '../../api/endpoints'

import { EditUser as Form } from '../../components/organisms/Forms/EditUser'
import FormSection from './FormSection'

interface EditUserProps {}

type Props = EditUserProps

const EditUser: FC<Props> = () => {
	const [searchParams] = useSearchParams()
	const { id } = useParams()
	const { request } = useFetch()

	const [user, setUser] = React.useState<User | null>(null)

	React.useLayoutEffect(() => {
		;(async () => {
			const endpoint = `${apiEndpoints.USERS}/${id}`

			const user = await request<User>(endpoint, { method: 'GET' })

			UserSchema.parse(user)

			setUser(user)
		})()
	}, [])

	const fullname = searchParams.get('name')
	const userInfo = {
		name: String(fullname),
		email: user?.email || '',
		phone: user?.phone || '',
		company: user?.company.name || '',
	}

	const FormView = <>{user && <Form user={userInfo} />}</>

	return (
		<>
			<Helmet>
				<title>{fullname} 🥷</title>
			</Helmet>
			<FormSection>{FormView}</FormSection>
		</>
	)
}

export default EditUser
