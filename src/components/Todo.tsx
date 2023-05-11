import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrCompliance, GrCheckboxSelected } from "react-icons/gr";
import { ITodo } from "../types/types";
import { IoMdCheckboxOutline } from "react-icons/io";
import style from "../styles/Todo.module.scss";

type TypeTodoProps = ITodo & {
	removeTodo: (id: number) => void;
	index: number;
};

const Todo = ({ id, title, index, removeTodo }: TypeTodoProps) => {
	const [completed, setCompleted] = useState(false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const completeHandler = (_s: boolean): void => {
		setCompleted(prev => !prev);
	};

	return (
		<div className={`${style.todo} ${completed ? style.completedStyle : ""}`}>
			<h4 className={`${style.todoHeader}`}>{`#${index + 1}. ${title}`}</h4>
			<div className={style.controlButton}>
				{!completed ? (
					<GrCompliance
						onClick={() => completeHandler(completed)}
						className={style.completeButton}
					/>
				) : (
					<IoMdCheckboxOutline
						className={`${style.checkButton}`}
						onClick={() => completeHandler(completed)}
					/>
				)}
				<AiFillDelete
					className={`${style.deleteButton}`}
					onClick={() => removeTodo(id)}
				/>
			</div>
		</div>
	);
};

export default Todo;
