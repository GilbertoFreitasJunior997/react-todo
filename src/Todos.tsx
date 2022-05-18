import { FC } from "react";
import Textbox from "./components/textbox";
import Todo from "./components/todo";
import { Container } from './styles';

const Todos: FC = () => {
    return (
        <Container>
            TODOS
            <Textbox
                label="New Todo"
                onSubmit={(val: string) => {
                    console.log(val);
                }}
            />
        </Container>
    )
}

export default Todos;
