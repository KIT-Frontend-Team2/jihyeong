import styled from 'styled-components'

const Header = () => {
	return <S.Container>Header</S.Container>
}

export default Header

const Container = styled.div`
	padding: 5px 20px;
	background-color: #fff;
	border-bottom: 1px solid #ddd;
	position: fixed;
	top: 0;
	padding: 20px;
	width: 100%;
`

const S = {
	Container,
}
