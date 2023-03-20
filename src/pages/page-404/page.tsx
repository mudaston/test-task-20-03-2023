import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

interface HomeProps {}

type Props = HomeProps

const PageNotFound: FC<Props> = () => {
	return <>
		<Helmet>
			<title>🚫</title>
		</Helmet>
		<div>
			<h1>404</h1>
			<h2>Page not found</h2>
		</div>
	</>
}

export default PageNotFound
