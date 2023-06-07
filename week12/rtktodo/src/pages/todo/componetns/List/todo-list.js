import { useSelector } from 'react-redux'
import OneTodo from './one-todo'

const TodoList = () => {
	// todo의 state를 객체로 보냈으므로 todo.todos를 해야 todo state를 선택할 수 있습니다.
	const todoList = useSelector(state => state.todo.todos)
	const {loading} = useSelector(state => state.todo.addTodoState)

	if (loading) return <div>loading...</div>
	return (
		<>
			{todoList.map(todo => (
				<OneTodo todo={todo} />
			))}
		</>
	)
}
export default TodoList
