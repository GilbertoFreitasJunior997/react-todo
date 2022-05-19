import { FC, useRef, useState } from 'react';
import TodoProps from "./props";
import { AnimContainer, ButtonsContainer, StyledTodo, TodoButton, TodoContainer, deleteTimer } from './styles';

const Todo: FC<TodoProps> = ({ name, onDelete, onValueUpdate }) => {
    const todoRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(name)
    const beforeUpdateVal = useRef("");

    return (
        <AnimContainer>
            <TodoContainer ref={todoRef}>
                    <StyledTodo
                        type="text"
                        value={value}
                        onChange={e => setValue(e.currentTarget.value)}
                        ref={inputRef}
                        disabled={!editing}
                        onKeyUp={(e) => {
                            if(e.key === "Enter")
                            {
                                onValueUpdate(value);
                                setEditing(false);
                            }
                        }}
                        onBlur={() => {
                            setEditing(false);
                            setValue(beforeUpdateVal.current);
                        }}
                    />


                <ButtonsContainer>
                    <TodoButton
                        bgColor="rgb(0, 33, 71)"
                        onClick={() => {
                            setEditing(true);
                            inputRef.current?.focus();
                            beforeUpdateVal.current = value;
                        }}
                    >
                        A
                    </TodoButton>
                    <TodoButton
                        bgColor="#63000F"
                        onClick={() => {
                            if (todoRef.current)
                                todoRef.current.classList.add("delete");
                            setTimeout(() => {
                                onDelete();
                            }, deleteTimer)
                        }}
                    >
                        X
                    </TodoButton>
                </ButtonsContainer>
            </TodoContainer>
        </AnimContainer>
    )
}

export default Todo;
