import { FC, useState } from "react";
import Textbox from "./components/textbox";
import Todo from "./components/todo";
import { Container } from './styles';

const Todos: FC = () => {
    const [todos, setTodos] = useState<string[]>([]);

    return (
        <Container>
            TODOS
            <Textbox
                label="New Todo"
                onSubmit={(val: string) => {
                    if (val && val.trim() !== "")
                        setTodos([...todos, val]);
                }}
            />

            {todos.map((t, i) => {
                return (
                    <Todo
                        key={i}
                        name={t}
                    />
                )
            })}
        </Container>
    )
}

export default Todos;
