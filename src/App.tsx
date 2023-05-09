import { useState, ChangeEvent, MouseEvent, useEffect } from "react";
import { ITodo } from "./types/types";
import TodoList from "./components/TodoList";
import styles from "./styles/App.module.scss";

function App() {
	const [id, setID] = useState<number>(0);
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Array<ITodo>>([]);

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem("todos"));
		if (storedTodos) {
			setTodos(storedTodos);
		}
	}, []);

	useEffect(() => {
		if (todos && todos.length > 0) {
			localStorage.setItem("todos", JSON.stringify(todos));
		}
	}, [todos]);

	const removeTodo = (id: number): void => {
		if (todos.length > 1) {
			const filtred = todos.filter(todo => todo.id !== id);
			setTodos(filtred);
		} else {
			const filtred = todos.filter(todo => todo.id !== id);
			setTodos(filtred);
			localStorage.removeItem("todos");
		}
	};

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		setTodo(e.target.value);
	};

	const addTodoHandler = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		if (todo.trim() === "") return;
		setTodos(prev => [...prev, { title: todo, id: id }]);
		setTodo("");
		setID(prev => prev + 1);
	};

	return (
		<div className={`${styles.app} `}>
			<h1 className={styles.appTitle}>Todo app</h1>
			<form className={styles.formApp}>
				<input
					className={styles.inputApp}
					value={todo}
					type="text"
					onChange={onChangeHandler}
				/>
				<button
					className={`${styles.addTodoButton}`}
					onClick={addTodoHandler}>
					Add todo
				</button>
			</form>
			{todos.length ? (
				<TodoList
					removeTodo={removeTodo}
					todos={todos}
				/>
			) : null}
		</div>
	);
}

export default App;
