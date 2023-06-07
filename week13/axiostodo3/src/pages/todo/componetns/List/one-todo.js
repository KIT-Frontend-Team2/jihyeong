import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../../../styles/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan, faPen } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import useInput from '../../../../hooks/use-input'
import TODO_API from "apis/todoApi";
import timeHelper from "utils/time-helper";
import { useSetRecoilState } from 'recoil'
import { TodoListAtom } from "atoms/todo";

const OneTodo = ({ todo }) => {
    const { id, state, title, content, createdAt, updatedAt } = todo;
    const [isEditMode, setIsEditMode] = useState(false);
    const [editContent, onChangeEditContent] = useInput(content);
    const setTodoList = useSetRecoilState(TodoListAtom);

    const handleTodoEdit = () => {
        if (!isEditMode) return setIsEditMode(true)
        const updatePost = {
            ...todo, content: editContent
        }
        const res = TODO_API.updateTodo(updatePost)
        res.then((data) => {
            setTodoList(data)
        })
        setIsEditMode(false)
    }

    const handleTodoDelete = () => {
        if (window.confirm("정말 삭제하시겠습니까")) {
            const res = TODO_API.deleteTodo(id) // 1, 2
            res.then((data) => {
                setTodoList(data)
            })
        }
    }

    const handleTodoCheck = () => {
        const post = {
            ...todo, state: Number(!state)
        }
        setTodoList((prev) => {
            const updateList = [...prev]
            const selectNumber = updateList.findIndex((data) => data.id === id)
            if (selectNumber !== -1) {
                updateList[selectNumber] = post
            }
            console.log(updateList)
            return updateList
        }
        )
        // 낙관적 업데이트
        const res = TODO_API.updateTodo(post)
        res.then((data) => {
            setTodoList(data)
        })
        // 이후 실제로 업데이트된 정보를 가져옵니다.
    }

    const updateTime = timeHelper(updatedAt)


    return (
        <S.Wrapper state={state}>
            <S.Header>
                <S.StateBox state={state}>
                    <FontAwesomeIcon onClick={handleTodoCheck} icon={faCheck} />
                </S.StateBox>
                <S.Title state={state}>
                    {title}
                    <div>
                        {updateTime}{createdAt === updatedAt ? null : <S.ChangeDate>(수정됨)</S.ChangeDate>}
                        <FontAwesomeIcon icon={faPen} onClick={handleTodoEdit} />
                        <FontAwesomeIcon icon={faBan} onClick={handleTodoDelete} />
                    </div>
                </S.Title>
            </S.Header>
            <S.Content state={state}>
                {isEditMode ? <textarea value={editContent} onChange={onChangeEditContent}></textarea> : content}
            </S.Content>
        </S.Wrapper>
    );
};
export default React.memo(OneTodo);

const Wrapper = styled.li`
    width: 100%;
    background-color: ${({ theme }) => theme.PALETTE.white};
    border: 1px solid #999;
    margin: 16px 0;
    list-style: none;
    border-radius: 8px;
    background-color: ${({ state, theme }) =>
        state ? theme.PALETTE.gray[100] : theme.PALETTE.white};
`;

const Header = styled.div`
    border-bottom: 1px dotted #999;
    ${flexAlignCenter};
    padding: 8px 16px;
    height: 48px;
`;


const Title = styled.h1`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    text-decoration: ${({ state }) => (state ? "line-through" : "none")};
    & svg {
        cursor: pointer;
        margin-left: 16px;
        :hover {
            transform: scale(1.2);
        }
    }
`;


const ChangeDate = styled.span`
 color: grey
`

const StateBox = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
    ${flexCenter};
    color: ${({ state }) => (state ? "#3CB371" : "#999")};
    cursor: pointer;
    :hover {
        transform: scale(1.2);
    }
`;

const Content = styled.div`
    padding: 16px;
    text-decoration: ${({ state }) => (state ? "line-through" : "none")};
    & textarea {
        width: 100%;
        height: 100%;
        border: 1px dotted #999;
        outline: none;
        resize: none;
    }
`;

const S = {
    Wrapper,
    Header,
    StateBox,
    Title,
    Content, ChangeDate
};