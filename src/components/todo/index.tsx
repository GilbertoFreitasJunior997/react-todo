import { FC } from "react";
import TodoProps from "./props";
import { StyledTodo, TodoButton, TodoContainer } from './styles';

const Todo: FC<TodoProps> = ({ name, onDelete }) => {
    return (
        <TodoContainer>
            <StyledTodo
                type="text"
                defaultValue={name}
                disabled
            />


            <TodoButton>
                A
            </TodoButton>
            <TodoButton
                onClick={onDelete}
            >
                X
            </TodoButton>

        </TodoContainer>
    )
}

export default Todo;
