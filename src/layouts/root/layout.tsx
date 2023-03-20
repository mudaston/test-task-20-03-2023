import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { Header } from '../../components/organisms'

const Content = styled.div`
	flex: 1 1 auto;
`

const Layout = styled.main`
	display: flex;
	flex-direction: column;

	height: 100%;

	padding: 0 2rem;
`

const ContentLayout = () => {
	return (
		<>
			<Header />
			<Layout>
				<Content>
					<Outlet />
				</Content>
			</Layout>
		</>
	)
}

export default ContentLayout
