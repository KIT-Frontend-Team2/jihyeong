import React, { useEffect } from "react";
import BasicButton from "../../components/Button/Button";
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../styles/common";
import TodoAddModal from "./componetns/Modal/add-modal";
import TodoList from "./componetns/List/todo-list";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TODO_API from "apis/todoApi";
import { useTodoList } from "context/todolist";
import showTodoToastMessage, { toastOption } from "utils/toast-message";
import useModal from "hooks/use-modal";

const TodoPage = () => {

    const [todoList, setTodoList] = useTodoList();
    const [isAddTodoModal, handChangeModal] = useModal();

    useEffect(() => {
        const res = TODO_API.getTodo()
        res.then((data) => {
            setTodoList(data)
        })
    }, [])

    const onAddToDo = (e) => {
        handChangeModal()
        showTodoToastMessage(e, setTodoList)
    }

    return (
        <>
            {isAddTodoModal && <TodoAddModal onAddToDo={onAddToDo} onClose={handChangeModal} />}
            <S.Wrapper>
                <S.Container>
                    <S.Title>List</S.Title>
                    <S.Content>
                        {todoList ? <TodoList todoList={todoList} /> : <p>목록이 비어져 있습니다.</p>}
                    </S.Content>
                    <S.ButtonBox>
                        <BasicButton variant={"primary"} size={"full"}
                            onClick={handChangeModal}
                        >
                            추가
                        </BasicButton>
                    </S.ButtonBox>
                </S.Container>
            </S.Wrapper>
            <ToastContainer {...toastOption} />
        </>
    );
};
export default TodoPage;

const Wrapper = styled.div`
    height: calc(100vh - 60px);
    padding-bottom: 60px;
    ${flexCenter};
`;

const Container = styled.div`
    width: 420px;
    height: 100%;
    background-color: ${({ theme }) => theme.PALETTE.white};
    border-radius: 8px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    position: relative;
`;

const Title = styled.h1`
    background-color: ${({ theme }) => theme.PALETTE.primary[300]};
    color: ${({ theme }) => theme.PALETTE.fontColor};
    padding-left: 32px;
    height: 32px;
    ${flexAlignCenter};
`;


const Content = styled.div`
    width: 100%;
    height: calc(100% - 32px);
    padding-bottom: 64px;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const ButtonBox = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
`;

const S = {
    Wrapper,
    Container,
    Title,
    ButtonBox,
    Content
};
