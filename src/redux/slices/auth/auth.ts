import { createSlice } from '@reduxjs/toolkit'

interface initialStateData {
	authorized: boolean
}

const initialState: initialStateData = {
	authorized: false,
}

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authorizeUser(state) {
			state.authorized = true
		},
		unauthorizeUser(state) {
			state.authorized = false
		},
	},
})

export const { authorizeUser, unauthorizeUser } = auth.actions
export default auth.reducer
