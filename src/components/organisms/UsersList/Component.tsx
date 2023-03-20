import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import useFetch from '../../../hooks/useFetch'
import { UserSchema, type User as UserType } from '../../../services/user'
import apiEndpoints from '../../../api/endpoints'

import { Name, Phone, EditButton } from '../../molecules/User'
import List from './List'

interface UsersListProps {}

type Props = UsersListProps

const UsersList: FC<Props> = () => {
	const [users, setUsers] = React.useState<Array<UserType>>([])
	const navigator = useNavigate()

	const { request } = useFetch()

	const onClickEditUser = (id: number, name: string) => {
		navigator(`/edit/${id}?name=${name}`)
	}

	React.useEffect(() => {
		;(async () => {
			const requestedUsers = await request<Array<UserType>>(
				apiEndpoints.USERS,
				{
					method: 'GET',
				}
			)

			requestedUsers.forEach((user) => {
				UserSchema.parse(user)
			})

			setUsers(requestedUsers)
		})()
	}, [])

	return (
		<List>
			<span className="heading">User name</span>
			<span className="heading">Phone</span>
			<span className="heading">Edit user info</span>
			{users.map(({ id, name, phone }) => (
				<React.Fragment key={id}>
					<Name>{name}</Name>
					<Phone>{phone}</Phone>
					<EditButton onClick={() => onClickEditUser(id, name)}>
						Edit user
					</EditButton>
				</React.Fragment>
			))}
		</List>
	)
}

export default UsersList
