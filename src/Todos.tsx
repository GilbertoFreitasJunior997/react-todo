import { FC, useState } from "react";
import Textbox from "./components/textbox";
import Todo from "./components/todo";
import { Container, TodoContainer } from './styles';

const Todos: FC = () => {
    const [todos, setTodos] = useState<{
        id: number;
        name: string;
    }[]>([]);

    return (
        <Container>
            TODOS
            <Textbox
                label="New Todo"
                onSubmit={(val: string) => {
                    if (val && val.trim() !== "")
                        setTodos([...todos, {
                            name: val,
                            id: Math.max(...todos.map(x => x.id), 0) + 1,
                        }]);
                }}
            />
            <TodoContainer>
                {todos.map((t, i) => {
                    return (
                        <Todo
                            key={t.id}
                            onDelete={() => setTodos(x => x.filter(y => y.id !== t.id))}
                            {...t}
                        />
                    )
                })}
            </TodoContainer>
        </Container>
    )
}

export default Todos;
