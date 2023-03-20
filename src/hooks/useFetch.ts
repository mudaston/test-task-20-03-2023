import React from 'react'
import { AxiosRequestConfig } from 'axios'

import apiClient from '../api/api-client'

const useFetch = () => {
	const controller = React.useRef(new AbortController())

	async function request<T>(
		url: string,
		config?: AxiosRequestConfig
	): Promise<T> {
		const { data } = await apiClient(url, {
			...config,
			signal: controller.current.signal,
		})

		return data
	}

	const abort = () => {
		controller.current.abort()
	}

	React.useEffect(() => {
		return () => {
			controller.current.abort()
		}
	}, [])

	return { request, abort }
}

export default useFetch
