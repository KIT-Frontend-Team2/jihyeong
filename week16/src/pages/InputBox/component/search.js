import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import styled from 'styled-components'

const AutoKeyWord = ({ children, onClick }) => {
	return (
		<LabelTag onClick={() => onClick(children)}>
			<AiOutlineSearch size={20} />
			<span>{children}</span>
		</LabelTag>
	)
}

export default AutoKeyWord

const LabelTag = styled.li`
	display: flex;
	margin-bottom: 5px;
	cursor: pointer;
`
const Keyword = styled.span`
	font-size: 24px;
`
