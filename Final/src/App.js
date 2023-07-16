import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'

import { worker } from './__mock__/handler'
import router from './routes/router'
import theme from './styles/theme'

function App() {
	if (process.env.NODE_ENV === 'development') {
		worker.start()
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<RecoilRoot>
					<RouterProvider router={router} />
				</RecoilRoot>
			</ThemeProvider>
		</>
	)
}

export default App
