import { useMediaQuery } from '@mui/material'

export const useDevice = () => {
	// 노트북 & 태블릿 가로 : 1024px ~ 1279px
	// 태블릿 가로 : 768px ~ 1023px
	// 모바일 가로 & 태블릿 세로 : 480px ~ 767px
	// 모바일 : ~479px

	const isMobile = useMediaQuery('(max-width: 479px)')
	const isMobileAndTablet = useMediaQuery(
		'(min-width: 480px) and (max-width: 767px)',
	)
	const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
	const isTabletAndLaptop = useMediaQuery(
		'(min-width: 1024px) and (max-width: 1279px)',
	)
	const isDesktop = useMediaQuery('(min-width: 1280px)')

	return {
		isMobile,
		isMobileAndTablet,
		isTablet,
		isTabletAndLaptop,
		isDesktop,
	}
}
