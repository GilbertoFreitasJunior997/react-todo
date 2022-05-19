import { FC, useState, useRef } from 'react';
import Textbox from "./components/textbox";
import Todo from "./components/todo";
import { Container, SearchContainer, TodoContainer, NoDataText } from './styles';

const Todos: FC = () => {
    const searchRef = useRef<HTMLInputElement>();

    const [todos, setTodos] = useState<{
        id: number;
        name: string;
    }[]>([]);

    return (
        <Container>
            TODOS
            <SearchContainer>
                <Textbox
                    label="New Todo"
                    onSubmit={(val: string) => {
                        if (val && val.trim() !== "")
                            setTodos([...todos, {
                                name: val,
                                id: Math.max(...todos.map(x => x.id), 0) + 1,
                            }]);
                    }}
                    inputRef={searchRef}
                />
            </SearchContainer>

            <TodoContainer>
                {todos.length > 0 ?
                    <>
                        {todos.map((t, i) => {
                            return (
                                <Todo
                                    key={t.id}
                                    onDelete={() => setTodos(x => x.filter(y => y.id !== t.id))}
                                    {...t}
                                />
                            )
                        })}
                    </>
                    : <NoDataText
                        onClick={() => searchRef.current?.focus()}
                    >
                        Add a new ToDo
                    </NoDataText>}
            </TodoContainer>
        </Container>
    )
}

export default Todos;
