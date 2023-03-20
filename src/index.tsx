import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'

import { store } from './redux/store'

import App from './App'
import GlobalStyle from './style/global-style'

import './style/fonts.css'
import './style/reset.css'
import './style/global.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<BrowserRouter>
		<GlobalStyle />
		<Provider store={store}>
			<CookiesProvider>
				<App />
			</CookiesProvider>
		</Provider>
	</BrowserRouter>
)
