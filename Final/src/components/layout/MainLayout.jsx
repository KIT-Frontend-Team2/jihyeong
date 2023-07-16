import React from 'react'
import { Outlet } from 'react-router-dom'

import MainFooter from '../ui/organisms/MainFooter/MainFooter'
import MainHeader from '../ui/organisms/MainHeader/MainHeader'
import SideBar from '../ui/organisms/SideBar/SideBar'

const MainLayout = props => (
	<>
		<MainHeader />
		<Outlet />
		<SideBar />
		<MainFooter />
	</>
)

export default MainLayout
