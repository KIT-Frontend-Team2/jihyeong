import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import { Container } from '@mui/material'

const LayOut = props => (
	<>
		<Header />
		<Container sx={{ marginTop: '62px', padding: '20px' }}>
			<Outlet />
		</Container>
	</>
)

export default LayOut
