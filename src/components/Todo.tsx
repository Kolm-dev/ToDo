import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { ITodo } from "../types/types";
import style from "../styles/Todo.module.scss";

type TypeTodoProps = ITodo & {
	removeTodo: (id: number) => void;
	index: number;
};

const Todo = ({ id, title, index, removeTodo }: TypeTodoProps) => {
	const [completed, setCompleted] = useState(false);
	const completeHandler = (statusComplete: boolean): void => {
		setCompleted(prev => !prev);
	};

	return (
		<div className={`${style.todo} ${completed ? style.completedStyle : ""}`}>
			<h4
				className={`${style.todoHeader}`}
				onClick={() => completeHandler(completed)}>
				{`#${index + 1}. ${title} ${completed ? "(completed)" : ""}`}
			</h4>
			<AiFillDelete
				className={`${style.deleteButton}`}
				onClick={() => removeTodo(id)}
			/>
		</div>
	);
};

export default Todo;
