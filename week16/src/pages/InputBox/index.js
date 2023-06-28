import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'
import axiosInstance from '../../apis/@core'
import AutoKeyWord from './component/search'
import Local from '../../util/LocalStorage'
const InputBox = () => {
	let execute
	const [isShow, setIsShow] = useState(false)
	const [keyWords, setKeyWords] = useState([])
	const [recentSearch, setRecentSearch] = useState(Local.get())
	const inputRef = useRef('')
	const onChange = e => {
		console.log(inputRef.current.value)
		inputRef.current.value === '' ? setIsShow(true) : setIsShow(false)
		if (execute) {
			clearTimeout(execute)
		}
		if (inputRef.current.value === 0) return
		execute = setTimeout(async () => {
			execute = null
			try {
				const res = await axiosInstance.get('', {
					params: { key: inputRef.current.value },
				})
				setKeyWords(res.data)
				setKeyWords(prev => {
					return [inputRef.current.value, ...prev]
				})
			} catch (err) {
				console.log(err)
			}
		}, 300)
	}

	const setClickRecent = item => {
		console.log('setClickRecent, 들어옴')
		setRecentSearch(prev => [item, ...prev])
		Local.set(recentSearch)
	}

	const onKeyPress = e => {
		if (e.keyCode === 13) {
			if (inputRef.current.value.length === 0) {
				alert('검색어를 입력하여주세요')
				return
			} else {
				setRecentSearch(prev => [inputRef.current.value, ...prev])
				Local.set(recentSearch)
			}
		}
	}

	const deleteKeyWord = deleteIndex => {
		setRecentSearch(prev => prev.filter((_, index) => index !== deleteIndex))
		Local.set(recentSearch)
	}

	return (
		<div>
			<Input>
				<input
					ref={inputRef}
					type="text"
					onKeyDown={onKeyPress}
					onChange={onChange}
				/>

				<SearchIcon>
					<AiOutlineSearch size={30} />
				</SearchIcon>
				<div>
					{keyWords.length > 0 && (
						<KeyWordList>
							{keyWords.map((keyword, index) => {
								if (index === 0) {
									return (
										<>
											{inputRef.current.value.trim().length !== 0 && (
												<>
													<AutoKeyWord
														setRecentSearch={setRecentSearch}
														onClick={() => setClickRecent(keyword)}
													>
														{inputRef.current.value}
													</AutoKeyWord>
												</>
											)}
											<RecommendWord>
												{isShow ? '최근 검색어' : '추천 검색어'}
											</RecommendWord>
											{isShow &&
												recentSearch.map((list, index) => {
													console.log('들어옴')
													if (index > 4) return null
													return (
														<RecentlyBlock>
															<RecentlyBlock></RecentlyBlock>
															<AutoKeyWord
																key={Math.floor(Math.random() * 1000)}
																onClick={setClickRecent}
															>
																{list}
															</AutoKeyWord>
															<button onClick={() => deleteKeyWord(index)}>
																삭제
															</button>
														</RecentlyBlock>
													)
												})}
										</>
									)
								}
								return (
									!isShow && (
										<AutoKeyWord onClick={setClickRecent}>
											{keyword}
										</AutoKeyWord>
									)
								)
							})}
						</KeyWordList>
					)}
				</div>
			</Input>
		</div>
	)
}

export default InputBox

const Input = styled.div`
	position: relative;
	width: 60%;
	input {
		padding: 20px 40px 20px 20px;
		width: 100%;
		outline: none;
		border: 1px gray solid;
		border-radius: 30px;
		font-size: 20px;
	}
`
const RecommendWord = styled.div`
	color: gray;
	margin-bottom: 5px;
`
const SearchIcon = styled.div`
	position: absolute;
	top: 15px;
	right: -40px;
`
const KeyWordList = styled.ul`
	gap: 5px;
`
const RecentlyBlock = styled.div`
	display: flex;
`
