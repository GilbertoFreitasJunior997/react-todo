import { FC } from "react";
import TodoProps from "./props";

const Todo: FC<TodoProps> = ({ name }) => {
    return (
        <div>
            {name}
        </div>
    )
}

export default Todo;
