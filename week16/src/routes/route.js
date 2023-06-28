import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LayOut from '../common/LayOut'
import InputBox from '../pages/InputBox'

const route = createBrowserRouter([
	{
		path: '/',
		element: <LayOut />,
		children: [
			{
				path: '/',
				element: <InputBox />,
			},
		],
	},
])

export default route
